import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginstyle from '../styles/page_login.module.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    nombre_usuario: '',
    contraseña: '',
    tipo_usuario: 'usuario',
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [characterName, setCharacterName] = useState('');
  const [navigateToGame, setNavigateToGame] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const { nombre_usuario, contraseña, tipo_usuario } = credentials;
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre_usuario, contraseña }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Inicio de sesión exitoso.');
        setCharacterName(tipo_usuario === 'usuario' ? data.personaje : '');
        setNavigateToGame(tipo_usuario === 'usuario');
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

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    const { nombre_usuario, contraseña } = credentials;
    try {
      const response = await fetch('http://localhost:3000/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre_usuario, contraseña }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Inicio de sesión exitoso como administrador');
        navigate('/administration');
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

  const handleSubmit = (e) => {
    if (credentials.tipo_usuario === 'administrador') {
      handleAdminLogin(e);
    } else {
      handleUserLogin(e);
    }
  };

  const closeMessage = () => {
    setShowMessage(false);
    if (navigateToGame) {
      navigate('/game', { state: { character: characterName } });
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
                <input 
                  className={loginstyle.inputField} 
                  type="text" 
                  id="nombre_usuario" 
                  name="nombre_usuario" 
                  value={credentials.nombre_usuario} 
                  onChange={handleChange} 
                  required 
                />
                <label id={loginstyle.password} htmlFor="contraseña">Contraseña</label>
                <input 
                  className={loginstyle.inputField} 
                  type="password" 
                  id="contraseña" 
                  name="contraseña" 
                  value={credentials.contraseña} 
                  onChange={handleChange} 
                  required 
                />
                <label className={loginstyle.userTypeLabel} htmlFor="tipo_usuario" style={{ fontSize: '1.2em' }}>Tipo de Usuario</label>
                <select 
                  className={loginstyle.inputField} 
                  id="tipo_usuario" 
                  name="tipo_usuario" 
                  value={credentials.tipo_usuario} 
                  onChange={handleChange} 
                  required
                >
                  <option value="usuario">Usuario</option>
                  <option value="administrador">Administrador</option>
                </select>
              </div>
              <div className={loginstyle.buttons}>
                <button 
                  className={loginstyle.button} 
                  id={loginstyle.CancelButton} 
                  type="button" 
                  onClick={() => navigate('/')}
                >
                  Cancelar
                </button>
                <button 
                  className={loginstyle.button} 
                  id={loginstyle.AcceptButton} 
                  type="submit"
                >
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
