// Create.js
import React, { useState } from 'react';
import styles from '../styles/page_create.module.css';

const Create = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    const existingUsers = JSON.parse(localStorage.getItem('users')) || {};
    if (existingUsers[username]) {
      setMessage('El nombre de usuario ya está tomado.');
      setShowMessage(true);
      return;
    }

    existingUsers[username] = { email, password };
    localStorage.setItem('users', JSON.stringify(existingUsers));
    setMessage('Registro exitoso. Ahora puedes iniciar sesión.');
    setShowMessage(true);
  };

  const closeMessage = () => {
    setShowMessage(false);
    if (message === 'Registro exitoso. Ahora puedes iniciar sesión.') {
      window.location.href = '/login';
    }
  };

  return (
    <div className={styles.body}>
      {showMessage && (
        <div className={styles.overlay}>
          <div className={styles.messageBox}>
            <p>{message}</p>
            <button className={styles.closeButton} onClick={closeMessage}>Cerrar</button>
          </div>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.space}>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.tittle}>
                <b className={styles.headline}>¡NOS ALEGRA TANTO QUE QUIERAS UNIRTE!</b>
              </div>
              <div className={styles.labels}>
                <label id={styles.username} htmlFor="username">Nombre de Usuario</label>
                <input className={styles.inputField} type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                <label id={styles.email} htmlFor="email">Correo electrónico</label>
                <input className={styles.inputField} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                <label id={styles.password} htmlFor="password">Contraseña</label>
                <input className={styles.inputField} type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
              </div>
              <div className={styles.buttons}>
                <button className={styles.button} id={styles.AcceptButton} type="submit">
                  Crear
                </button>
                <button className={styles.button} id={styles.CancelButton} type="button" onClick={() => window.location.href = '/'}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.imagen}>
          <img className={styles.registra_img} src="/img/REGISTRAR.png" alt="Registrar" />
        </div>
      </div>
    </div>
  );
};

export default Create;
