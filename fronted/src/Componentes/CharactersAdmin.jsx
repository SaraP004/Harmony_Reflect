import React, { useState } from 'react';
import styles from '../styles/CharactersAdmin.module.css';



const CharactersAdmin = () => {
    const [characterName, setCharacterName] = useState('');
  const [savedCharacterName, setSavedCharacterName] = useState('');
  const [imagePath, setImagePath] = useState('');

  const handleCharacterChange = (e) => {
    setCharacterName(e.target.value);
  };

  const handleSave = () => {
    setSavedCharacterName(characterName);
    setImagePath(`/img/${characterName}/animation_happy/happy1.png`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
      <label id={styles.character_name} htmlFor="characterName">Nombre del Personaje:</label>
      <input
        type="text"
        id="characterName"
        value={characterName}
        onChange={handleCharacterChange}
        className={styles.inputField}
        placeholder="Escribe el nombre del personaje"
      />
      <button onClick={handleSave} id={styles.AcceptButton} className={styles.button}>
        Guardar
      </button>

      {savedCharacterName && (
        <div className={styles.result}>
          <h3>Personaje Guardado: {savedCharacterName}</h3>
          {imagePath && (
            <div className={styles.imageContainer}>
              <img src={imagePath} alt={savedCharacterName} className={styles.characterImage} />
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  );
};

export default CharactersAdmin;
