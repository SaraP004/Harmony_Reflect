import React, { useState } from 'react';
import styles from '../styles/PageParentalC.module.css';

const ParentalControl = () => {
  const [formData, setFormData] = useState({
    nombre_completo: '',
    username: '',
    email: '',
    password: '',
    relacion: '' // Añadido para capturar la relación
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/control-parental', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Error al registrar el control parental');
      }

      const data = await response.json();
      setMessage('Registro exitoso. Ahora puedes iniciar sesión.');
      setShowMessage(true);
    } catch (error) {
      console.error('Error al registrar control parental:', error);
      setMessage('Error al registrar el control parental.');
      setShowMessage(true);
    }
  };

  const closeMessage = () => {
    setShowMessage(false);
    if (message === 'Registro exitoso. Ahora puedes iniciar sesión.') {
      window.location.href = '/imageCharacters'; // Redirige a la página de inicio o una página específica
    }
  };

  return (
    <div className={styles.body}>
      {showMessage && (
        <div className={styles.overlay}>
          <div className={styles.messageBox}>
            <p>{message}</p>
            <button className={styles.closeButton} onClick={closeMessage}>Aceptar</button>
          </div>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.space}>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.tittle}>
                <b className={styles.headline}>¡Oh vaya! ¡Eres muy pequeño!</b>
              </div>
              <div className={styles.labels}>
                <label id={styles.nombre_completo} htmlFor="nombre_completo">Nombre Completo</label>
                <input className={styles.inputField} type="text" id="nombre_completo" name="nombre_completo" value={formData.nombre_completo} onChange={handleChange} required />
                <label id={styles.username} htmlFor="username">Nombre de Usuario</label>
                <input className={styles.inputField} type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                <label id={styles.email} htmlFor="email">Correo electrónico</label>
                <input className={styles.inputField} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                <label id={styles.password} htmlFor="password">Contraseña</label>
                <input className={styles.inputField} type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                <label id={styles.relacion} htmlFor="relacion">Relación con Usuario</label>
                <select 
                  id="relacion" 
                  name="relacion" 
                  value={formData.relacion} 
                  onChange={handleChange} 
                  required 
                  style={{
                    fontSize: '16px', // Ajusta el tamaño de la fuente según tus necesidades
                    padding: '10px' // Agrega un poco de espacio interno para hacerlo más visible
                  }}
                >
                  <option value="">Seleccione una opción</option>
                  <option value="Padre">Padre</option>
                  <option value="Madre">Madre</option>
                  <option value="Tutor Legal">Tutor Legal</option>
                </select>
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
          <img className={styles.registra_img} src="/img/ControlParental.png" alt="Registrar" />
        </div>
      </div>
    </div>
  );
};

export default ParentalControl;
