import React from "react";
import styles from '../styles/Characters.module.css'; //Exportación de diseño

export function Character({character, name}) {
    const img = `/img/${character}/animation_happy/happy1.png`; //Constante para mostrar imagen
    return(
        //Ajustes de para estilo de los personajes
        <article className={styles.member}> 
            <h1>{name}</h1> 
            <img id={styles.character_png} src={img} alt="" />
        </article> 
    );
};
