import React from "react";
import styles from '../styles/Characters.module.css';

export function Character({ character, name, onClick, isSelected }) {
    const img = `/img/${character}/animation_happy/happy1.png`;

    return (
        <article
            className={`${styles.member} ${isSelected ? styles.selected : ''}`}
            onClick={onClick}
        >
            <h1>{name}</h1>
            <img id={styles.character_png} src={img} alt="" />
        </article>
    );
}
