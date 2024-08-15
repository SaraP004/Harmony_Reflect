import React, { useState } from 'react';
import styles from '../styles/Characters.module.css';
import { Character } from "../Aplicaciones/Characters";

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

const OptionCharacters = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    };

    const handleSelectClick = async () => {
      if (selectedCharacter) {
          try {
              const response = await fetch('http://localhost:3000/api/saveCharacter', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ character: selectedCharacter }),
              });
  
              if (response.ok) {
                  const data = await response.json();
                  console.log('Personaje guardado:', data);
                  window.location.href = '/login'; 
              } else {
                  console.error('Error al guardar el personaje');
              }
          } catch (error) {
              console.error('Error:', error);
          }
      }
  };
  

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.aboutUS}>
                    <div className={styles.textAboutUs}>
                        <h1 id={styles.tittleContext}>¿Quién será tu compañero?</h1>
                        <p>Nuestros amigables personajes quieren conocerte, así que elige a quién te gustaría tener.</p>
                    </div>
                    <div className={styles.AboutUs}>
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
                        <button
                            className={styles.downloadButton}
                            onClick={handleSelectClick}
                        >
                            Seleccionar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OptionCharacters;
