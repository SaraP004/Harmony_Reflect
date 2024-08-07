// About.jsx
import React from 'react';
import styles from '../styles/About.module.css';
import { AboutMembers } from "./About_Members";
//Arreglo de todos los miembros
const users = [
    {
      username: "Sara_Piedra",
      name: "Sara Piedra",
      description: "Lider del Equipo, Diseñadora de la Página y Artista",
    },
    {
      username: "Cristhoper_Puma",
      name: "Cristhoper Puma",
      description: "Programador General del la página Web",
    },
    {
      username: "Antonella_Jativa",
      name: "Antonella Jativa",
      description: "Encargada de la conexión y funcionalidad de la página",
    },
  ];


const About = () => {
  return (
    <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <div className={styles.textAbout}>
                    <h1>Acerca de HarmonyReflect</h1>
                    <p>HarmonyReflect es un juego de hábitos basado en la web, está diseñado para ayudar a los usuarios a desarrollar y mantener hábitos saludables.Un personaje amigable motiva a los usuarios mostrando diferentes emociones (feliz, triste, contento) según las acciones del usuario.</p>
                </div>
                <img id={styles.imgDescription} src="/img/LOGIN.png" alt="" />
            </div>
            <div className={styles.aboutUS}>
                <div className={styles.textAboutUs}>
                    <h1 id = {styles.tittleContext}> ¿Quiénes somos?</h1>
                    <p>Somos un equipo dedicado de desarrolladores y entusiastas de la salud que creemos en el poder de los hábitos saludables. Nuestro objetivo es proporcionar una herramienta interactiva y amigable que te ayude a mantener un estilo de vida equilibrado.</p>
                </div>
                <div className={styles.AboutUs}>
                    {users.map(({ username, name, description}) => (
                        <AboutMembers
                        username={username} 
                        name={name}
                        description={description}
                        ></AboutMembers>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};
//{}
export default About;