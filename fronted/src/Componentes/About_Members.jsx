import React from "react";
import styles from '../styles/About.module.css'; //Exportación de diseño

export function AboutMembers({username, name, description}) {
    const img = `/img/integrantes/${username}.png`; //Constante para mostrar imagen
    return(
        //Ajustes de para estilo de los miembros
        <article className={styles.member}> 
            <h1>{name}</h1> 
            <img id={styles.member_png} src={img} alt="" />
            <p>{description}</p>
        </article> 
    );
};