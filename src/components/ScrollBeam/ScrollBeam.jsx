import React, { useCallback, useEffect, useRef, useState } from 'react';

function ScrollBeam() {
    const beamRef = useRef(null);
    const dragging = useRef(false);
    const [position, setPosition] = useState({ progress: 0, height: 0, visible: false });

    const updateFromProgress = useCallback((progress) => {
        const root = document.documentElement;
        const maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
        const nextProgress = Math.max(0, Math.min(1, progress));
        window.scrollTo({ top: maxScroll * nextProgress, behavior: 'auto' });
        setPosition((current) => ({ ...current, progress: nextProgress }));
    }, []);

    const updatePosition = useCallback(() => {
        const root = document.documentElement;
        const maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
        const trackHeight = Math.max(0, window.innerHeight - 16);
        const thumbHeight = maxScroll === 0 ? trackHeight : Math.min(trackHeight, Math.max(54, (trackHeight * window.innerHeight) / root.scrollHeight));
        setPosition({
            progress: maxScroll === 0 ? 0 : window.scrollY / maxScroll,
            height: thumbHeight,
            visible: maxScroll > 0
        });
    }, []);

    useEffect(() => {
        let frame = 0;
        const scheduleUpdate = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(updatePosition);
        };
        updatePosition();
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(scheduleUpdate);
        observer?.observe(document.documentElement);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
            observer?.disconnect();
        };
    }, [updatePosition]);

    const seekAt = (clientY) => {
        const track = beamRef.current;
        if (!track) return;
        const bounds = track.getBoundingClientRect();
        const travel = Math.max(1, bounds.height - position.height);
        const offset = Math.max(0, Math.min(travel, clientY - bounds.top - position.height / 2));
        updateFromProgress(offset / travel);
    };

    const handleKeyDown = (event) => {
        const increments = { ArrowDown: 0.04, ArrowUp: -0.04, PageDown: 0.12, PageUp: -0.12, Home: -1, End: 1 };
        if (!(event.key in increments)) return;
        event.preventDefault();
        const change = increments[event.key];
        updateFromProgress(event.key === 'Home' ? 0 : event.key === 'End' ? 1 : position.progress + change);
    };

    if (!position.visible) return null;
    const trackHeight = Math.max(0, window.innerHeight - 16);
    const top = 8 + position.progress * Math.max(0, trackHeight - position.height);

    return (
        <div
            ref={beamRef}
            className={`scroll-beam ${dragging.current ? 'is-dragging' : ''}`}
            role='scrollbar'
            aria-label='Page scroll position'
            aria-controls='page-scroll-area'
            aria-orientation='vertical'
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position.progress * 100)}
            tabIndex={0}
            onPointerDown={(event) => { event.preventDefault(); dragging.current = true; event.currentTarget.setPointerCapture(event.pointerId); seekAt(event.clientY); }}
            onPointerMove={(event) => { if (dragging.current) seekAt(event.clientY); }}
            onPointerUp={(event) => { dragging.current = false; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
            onPointerCancel={() => { dragging.current = false; }}
            onKeyDown={handleKeyDown}
        >
            <span className='scroll-beam-thumb' style={{ top: `${top}px`, height: `${position.height}px` }} />
        </div>
    );
}

export default ScrollBeam;
