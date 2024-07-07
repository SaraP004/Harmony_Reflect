import React, { useState } from 'react';
import loginstyle from '../styles/page_login.module.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    const existingUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (existingUsers[username] && existingUsers[username].password === password) {
      setMessage('Inicio de sesión exitoso.');
      setShowMessage(true);
    } else {
      setMessage('Nombre de usuario o contraseña incorrectos.');
      setShowMessage(true);
    }
  };

  const closeMessage = () => {
    setShowMessage(false);
    if (message === 'Inicio de sesión exitoso.') {
      window.location.href = '/game';
    }
  };

  return (
    <div className={loginstyle.body}>
      {showMessage && (
        <div className={loginstyle.overlay}>
          <div className={loginstyle.messageBox}>
            <p>{message}</p>
            <button className={loginstyle.closeButton} onClick={closeMessage}>Aceptar</button>
          </div>
        </div>
      )}
      <div className={loginstyle.container}>
        <div className={loginstyle.imagen}>
          <img id={loginstyle.registra_img} src="/img/LOGIN.png" alt="Login" />
        </div>
        <div className={loginstyle.space}>
          <div className={loginstyle.form}>
            <form onSubmit={handleSubmit}>
              <div className={loginstyle.tittle}>
                <b className={loginstyle.headline}>¡Hola! ¡Qué bueno es verte por aquí!</b>
              </div>
              <div className={loginstyle.labels}>
                <label htmlFor="username">Nombre de Usuario o Correo</label>
                <input type="text" id="username" name="username" value={credentials.username} onChange={handleChange} required />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} required />
              </div>
              <div className={loginstyle.buttons}>
                <button className={loginstyle.button} id={loginstyle.CancelButton} type="button" onClick={() => window.location.href = '/'}>
                  Cancelar
                </button>
                <button className={loginstyle.button} id={loginstyle.AcceptButton} type="submit">
                  Iniciar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
