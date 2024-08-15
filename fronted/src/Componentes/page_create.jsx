import React, { useState } from 'react';
import styles from '../styles/page_create.module.css';
import { Character } from "../Aplicaciones/Characters";
import stylesCharacters from '../styles/Characters.module.css';

const users = [
    {
        character: "Michu",
        name: "El divertido Michu",
    },
    {
        character: "Canela",
        name: "La adorable Canela",
    },
];

const Create = () => {
  const [formData, setFormData] = useState({
    nombre_completo: '',
    nombre_usuario: '',
    correo: '',
    contraseña: '',
    edad: ''
  });

  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          personaje: selectedCharacter // Incluye el personaje seleccionado en la solicitud
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error al registrar');
      }
  
      const data = await response.json();
      console.log('Usuario registrado:', data);
  
      if (formData.edad < 18) {
        setMessage('Eres menor de edad. Recuerda tener la supervisión de un adulto.');
        setRedirectUrl('/login');
      } else {
        setMessage('Registro exitoso. Ahora puedes iniciar sesión.');
        setRedirectUrl('/login');
      }
      setShowMessage(true);
    } catch (error) {
      console.error('Error al registrar:', error);
      setMessage('Error al registrar el usuario.');
      setShowMessage(true);
    }
  };

  const closeMessage = () => {
    setShowMessage(false);
    window.location.href = redirectUrl;
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
                <b className={styles.headline}>¡Únete a nuestra hermosa comunidad!</b>
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
                <label id={styles.age} htmlFor="edad">Edad</label>
                <input
                  className={styles.inputField}
                  type="number"
                  id="edad"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                  required
                />

                <div className={stylesCharacters.body}>
                  <div className={stylesCharacters.container}>
                    <div className={stylesCharacters.aboutUS}>
                      <div className={stylesCharacters.textAboutUs}>
                        <h1 id={stylesCharacters.tittleContext}>¿Quién será tu compañero?</h1>
                        <p>Nuestros amigables personajes quieren conocerte, así que elige a quién te gustaría tener.</p>
                      </div>
                      <div className={stylesCharacters.AboutUs}>
                        {users.map(({ character, name }) => (
                          <Character
                            key={character}
                            character={character}
                            name={name}
                            isSelected={selectedCharacter === character}
                            onClick={() => handleCharacterClick(character)}
                          />
                        ))}
                      </div>
                      {selectedCharacter && (
                        <button className={stylesCharacters.downloadButton} type="button">
                          Seleccionar
                        </button>
                      )}
                    </div>
                  </div>
                </div>

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
