import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function TourModal({ tour, onClose }) {
    const dialogRef = useRef(null);
    const closeRef = useRef(onClose);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [preview, setPreview] = useState(false);
    closeRef.current = onClose;

    useEffect(() => {
        const previous = document.activeElement;
        const oldOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialogRef.current?.focus();
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeRef.current();
            if (event.key === 'Tab' && dialogRef.current) {
                const items = dialogRef.current.querySelectorAll('button:not([disabled]), input:not([disabled])');
                const first = items[0];
                const last = items[items.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = oldOverflow;
            previous?.focus?.();
        };
    }, []);

    const selection = tour.kind === 'visa' ? `${tour.days} tourist visa · ${tour.price}` : tour.kind === 'tour' ? `${tour.title} · ${tour.price}` : 'Trip planning inquiry';
    const submit = (event) => {
        event.preventDefault();
        const nextErrors = {};
        if (!name.trim()) nextErrors.name = 'Please enter your full name.';
        if (phone.replace(/\D/g, '').length < 7) nextErrors.phone = 'Please enter a valid phone number.';
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) return;
        const message = `Hello! I’m interested in ${selection}. My name is ${name.trim()}, phone: ${phone.trim()}.`;
        window.open(`https://wa.me/992000603115?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    };
    const previewDetails = () => { setName('Alex Morgan'); setPhone('+992 90 123 45 67'); setErrors({}); setPreview(true); };

    return createPortal(
        <div className='modal-overlay' onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
            <section className='modal' role='dialog' aria-modal='true' aria-labelledby='tour-modal-title' tabIndex={-1} ref={dialogRef}>
                <div className='modal-heading'><p className='card-label'>LET’S MAKE IT HAPPEN</p><button className='modal-close' type='button' onClick={onClose} aria-label='Close inquiry'>×</button></div>
                <h2 id='tour-modal-title'>Your Dubai starts here.</h2>
                <p className='modal-description'>Share your details and continue the conversation on WhatsApp.</p>
                <div className='modal-selection'><small>YOU’RE INTERESTED IN</small><strong>{selection}</strong></div>
                <form noValidate onSubmit={submit}>
                    <label htmlFor='inquiry-name'>Full name <span>*</span></label>
                    <input id='inquiry-name' value={name} onChange={(event) => { setName(event.target.value); setErrors((current) => ({ ...current, name: '' })); setPreview(false); }} placeholder='Your full name' autoComplete='name' aria-required='true' aria-invalid={Boolean(errors.name)} />
                    {errors.name && <small className='field-error'>{errors.name}</small>}
                    <label htmlFor='inquiry-phone'>Phone number <span>*</span></label>
                    <input id='inquiry-phone' value={phone} onChange={(event) => { setPhone(event.target.value); setErrors((current) => ({ ...current, phone: '' })); setPreview(false); }} placeholder='+992  •• ••• •• ••' autoComplete='tel' inputMode='tel' type='tel' aria-required='true' aria-invalid={Boolean(errors.phone)} />
                    {errors.phone && <small className='field-error'>{errors.phone}</small>}
                    <button className='button primary modal-submit' type='submit'>Continue to WhatsApp <span aria-hidden='true'>↗</span></button>
                </form>
                <p className='form-note'>Opens WhatsApp with your inquiry. Nothing is submitted to this website.</p>
                {preview && <p className='preview-note'>Preview uses sample contact details.</p>}
                {!preview && <button className='button secondary modal-preview' type='button' onClick={previewDetails}>Preview with sample details</button>}
            </section>
        </div>, document.body
    );
}

export default TourModal;
