import React, { useState } from 'react';
import styles from '../styles/page_create.module.css';

const Create = () => {
  const [formData, setFormData] = useState({
    nombre_completo: '',
    nombre_usuario: '',
    correo: '',
    contraseña: ''
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });      
      
      if (!response.ok) {
        throw new Error('Error al registrar');
      }
      
      const data = await response.json();
      console.log('Usuario registrado:', data);
      setMessage('Registro exitoso. Ahora puedes iniciar sesión.');
      setShowMessage(true);
    } catch (error) {
      console.error('Error al registrar:', error);
      setMessage('Error al registrar el usuario.');
      setShowMessage(true);
    }
  };

  const closeMessage = () => {
    setShowMessage(false);
    if (message === 'Registro exitoso. Ahora puedes iniciar sesión.') {
      window.location.href = '/login'; // Redirige a la página de inicio de sesión
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
                <b className={styles.headline}>¡Unete a nuestra hermosa comunidad!</b>
              </div>
              <div className={styles.labels}>
                <label id={styles.username} htmlFor="nombre_completo">Nombre Completo</label>
                <input 
                  className={styles.inputField} 
                  type="text" 
                  id="nombre_completo" 
                  name="nombre_completo" 
                  value={formData.nombre_completo} 
                  onChange={handleChange} 
                  required 
                />
                <label id={styles.username} htmlFor="nombre_usuario">Nombre de usuario</label>
                <input 
                  className={styles.inputField} 
                  type="text" 
                  id="nombre_usuario" 
                  name="nombre_usuario" 
                  value={formData.nombre_usuario} 
                  onChange={handleChange} 
                  required 
                />
                <label id={styles.email} htmlFor="correo">Correo electrónico</label>
                <input 
                  className={styles.inputField} 
                  type="email" 
                  id="correo" 
                  name="correo" 
                  value={formData.correo} 
                  onChange={handleChange} 
                  required 
                />
                <label id={styles.password} htmlFor="contraseña">Contraseña</label>
                <input 
                  className={styles.inputField} 
                  type="password" 
                  id="contraseña" 
                  name="contraseña" 
                  value={formData.contraseña} 
                  onChange={handleChange} 
                  required 
                />
                <label id={styles.age} htmlFor="contraseña">Edad</label>
                <input 
                  className={styles.inputField} 
                  type="text" 
                  id="edad" 
                  name="edad" 
                  value={formData.contraseña} /*Cambien esto para la base*/
                  onChange={handleChange} 
                  required 
                />
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
