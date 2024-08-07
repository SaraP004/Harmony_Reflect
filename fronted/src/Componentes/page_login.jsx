import React, { useState } from 'react';
import loginstyle from '../styles/page_login.module.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    nombre_usuario: '',
    contraseña: ''
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre_usuario, contraseña } = credentials;

    console.log('Datos enviados:', { nombre_usuario, contraseña });

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre_usuario, contraseña }),
      });

      const data = await response.json();
      console.log('Respuesta del servidor:', data);

      if (response.ok) {
        setMessage('Inicio de sesión exitoso.');
        setShowMessage(true);
      } else {
        setMessage(data.error || 'Nombre de usuario o contraseña incorrectos');
        setShowMessage(true);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMessage('Error de red. Inténtalo de nuevo.');
      setShowMessage(true);
    }
  };

  const closeMessage = () => {
    setShowMessage(false);
    if (message === 'Inicio de sesión exitoso.') {
      window.location.href = '/game'; // Redirige a la página del juego
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
                <label id={loginstyle.username} htmlFor="nombre_usuario">Nombre de Usuario</label>
                <input className={loginstyle.inputField} type="text" id="nombre_usuario" name="nombre_usuario" value={credentials.nombre_usuario} onChange={handleChange} required />
                <label id={loginstyle.password} htmlFor="contraseña">Contraseña</label>
                <input className={loginstyle.inputField} type="password" id="contraseña" name="contraseña" value={credentials.contraseña} onChange={handleChange} required />
                <label id={loginstyle.type} htmlFor="type">Se quiere ingresar como</label>
                <form className={loginstyle.inputField} action="#">
                    <select name="opciones" id="opciones">
                        <option value="opcion1">Padre</option>
                        <option value="opcion2">Usuario</option>
                        <option value="opcion3">Administrador</option>
                    </select>
                  </form>
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
