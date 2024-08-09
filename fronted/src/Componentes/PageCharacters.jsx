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

    const handleSelectClick = () => {
        if (selectedCharacter) {
            window.location.href = '/login';
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
