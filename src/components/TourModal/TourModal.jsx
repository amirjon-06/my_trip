import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import './TourModal.css';

function TourModal({ tour, onClose }) {
    const dialogRef = useRef(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;
    const whatsappUrl = `https://wa.me/992000000000?text=${encodeURIComponent(`Здравствуйте! Меня интересует ${tour.title} — ${tour.price}.`)}`;

    useEffect(() => {
        const previouslyFocused = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialogRef.current.focus();

        function handleKeyDown(event) {
            if (event.key === 'Escape') onCloseRef.current();
            if (event.key === 'Tab') {
                const items = dialogRef.current.querySelectorAll('button:not([disabled]), a[href]');
                const first = items[0];
                const last = items[items.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousOverflow;
            previouslyFocused?.focus?.();
        };
    }, []);

    return createPortal(
        <div className='tour-modal-overlay' onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
            <div className='tour-modal' role='dialog' aria-modal='true' aria-labelledby='tour-modal-title' tabIndex={-1} ref={dialogRef}>
                <button type='button' className='tour-modal-close' onClick={onClose} aria-label='Закрыть'>×</button>
                <div className='tour-modal-image'>
                    <img src={tour.img} alt={tour.title} />
                    {tour.days && <span className='tour-modal-days'>{tour.days}</span>}
                </div>
                <div className='tour-modal-content'>
                    <span className='tour-modal-eyebrow'>{tour.kind === 'visa' ? 'Визовый пакет' : 'Тур-пакет'}</span>
                    <h2 id='tour-modal-title'>{tour.title}</h2>
                    <p className='tour-modal-description'>{tour.description}</p>
                    <div className='tour-modal-price'>
                        <span>Стоимость пакета</span>
                        <strong>{tour.price}</strong>
                    </div>
                    <a className='tour-modal-submit' href={whatsappUrl} target='_blank' rel='noopener noreferrer'>Написать в WhatsApp</a>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default TourModal;
