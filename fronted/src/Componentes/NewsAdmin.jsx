import React, { useState } from 'react';
import styles from '../styles/NewsAdmin.module.css';

const NewsAdmin = () => {
    const [formData, setFormData] = useState({
        title: '',   // Campo para el título
        message: ''  // Campo para el mensaje
    });

    const [showMessage, setShowMessage] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmationMessage('¡Formulario enviado exitosamente!');
        setShowMessage(true);
    };

    const closeMessage = () => {
        setShowMessage(false);
    };

    return (
        <div className={styles.body}>
            {showMessage && (
                <div className={styles.overlay}>
                    <div className={styles.messageBox}>
                        <p>{confirmationMessage}</p>
                        <button className={styles.closeButton} onClick={closeMessage}>Cerrar</button>
                    </div>
                </div>
            )}
            <div className={styles.container}>
                <div className={styles.instructions}>
                    <b>Ingreso de nuevas noticias!</b>
                    <p>En esta sección podrás subir anuncios para todos nuestros usuarios,
                        con la intención de que estén informados de cualquier actualización.
                    </p>
                </div>
                <div className={styles.space}>
                    <div className={styles.form}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.labels}>
                                <label htmlFor="title">Título</label>
                                <input
                                    className={styles.inputField}
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    className={styles.textArea}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.button} id={styles.AcceptButton} type="submit">
                                    Crear
                                </button>
                                <button
                                    className={styles.button}
                                    id={styles.CancelButton}
                                    type="button"
                                    onClick={() => window.location.href = '/'}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsAdmin;
