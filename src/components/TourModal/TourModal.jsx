import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useT } from '../../i18n';

function TourModal({ tour, onClose }) {
    const t = useT('modal');
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
            if (event.key !== 'Tab' || !dialogRef.current) return;

            const items = dialogRef.current.querySelectorAll('button:not([disabled]), input:not([disabled])');
            const first = items[0];
            const last = items[items.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = oldOverflow;
            previous?.focus?.();
        };
    }, []);

    const selection = tour.kind === 'inquiry' ? t[13] : `${tour.title} · ${tour.price}`;

    const submit = (event) => {
        event.preventDefault();
        const nextErrors = {};

        if (!name.trim()) nextErrors.name = t[11];
        if (phone.replace(/\D/g, '').length < 7) nextErrors.phone = t[12];
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) return;

        const message = `${t[0]}: ${selection}. ${t[4]}: ${name.trim()}, ${t[6]}: ${phone.trim()}.`;
        window.open(
            `https://wa.me/992000603115?text=${encodeURIComponent(message)}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    const previewDetails = () => {
        setName('Alex Morgan');
        setPhone('+992 90 123 45 67');
        setErrors({});
        setPreview(true);
    };

    return createPortal(
        <div className='modal-overlay' onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
            <section
                className='modal'
                role='dialog'
                aria-modal='true'
                aria-labelledby='tour-modal-title'
                tabIndex={-1}
                ref={dialogRef}
            >
                <div className='modal-heading'>
                    <p className='card-label'>{t[0]}</p>
                    <button className='modal-close' type='button' onClick={onClose} aria-label='Close'>×</button>
                </div>
                <h2 id='tour-modal-title'>{t[1]}</h2>
                <p className='modal-description'>{t[2]}</p>
                <div className='modal-selection'>
                    <small>{t[3]}</small>
                    <strong>{selection}</strong>
                </div>
                <form noValidate onSubmit={submit}>
                    <label htmlFor='inquiry-name'>{t[4]} <span>*</span></label>
                    <input
                        id='inquiry-name'
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                            setErrors((current) => ({ ...current, name: '' }));
                            setPreview(false);
                        }}
                        placeholder={t[5]}
                        autoComplete='name'
                        aria-required='true'
                        aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <small className='field-error'>{errors.name}</small>}
                    <label htmlFor='inquiry-phone'>{t[6]} <span>*</span></label>
                    <input
                        id='inquiry-phone'
                        value={phone}
                        onChange={(event) => {
                            setPhone(event.target.value);
                            setErrors((current) => ({ ...current, phone: '' }));
                            setPreview(false);
                        }}
                        placeholder='+992'
                        autoComplete='tel'
                        inputMode='tel'
                        type='tel'
                        aria-required='true'
                        aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && <small className='field-error'>{errors.phone}</small>}
                    <button className='button primary modal-submit' type='submit'>
                        {t[7]} <span aria-hidden='true'></span>
                    </button>
                </form>
                <p className='form-note'>{t[8]}</p>
                {preview && <p className='preview-note'>{t[10]}</p>}
                {!preview && (
                    <button className='button secondary modal-preview' type='button' onClick={previewDetails}>
                        {t[9]}
                    </button>
                )}
            </section>
        </div>,
        document.body
    );
}

export default TourModal;
