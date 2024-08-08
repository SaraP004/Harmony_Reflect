// About.jsx
import React from 'react';
import styles from '../styles/Characters.module.css';
import { Character } from "../Aplicaciones/Characters";
//Arreglo de todos los miembros
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
  return (
    <div className={styles.body}>
        <div className={styles.container}>
            
            <div className={styles.aboutUS}>
                <div className={styles.textAboutUs}>
                    <h1 id = {styles.tittleContext}> ¿Quién será tu compañero?</h1>
                    <p>Nuestros amigables personajes quieren conocerte, así que elige a quién te gustaría tener.</p>
                </div>
                <div className={styles.AboutUs}>
                    {users.map(({ character, name}) => (
                        <Character
                        character={character} 
                        name={name}
                        ></Character>
                    ))}
                </div>
                <a href={styles.src} download className={styles.downloadButton}>
                    Seleccionar</a>
            </div>
        </div>
    </div>
  );
};
//{}
export default OptionCharacters;