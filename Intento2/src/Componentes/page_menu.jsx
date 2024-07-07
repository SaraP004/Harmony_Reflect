import React from 'react';
import menustyles from '../styles/page_menu.module.css';

const Menu = () => {
  return (
    <div className={menustyles.body}>
    <div className={menustyles.container}>
      <div className={menustyles.logo}>
        <img id={menustyles.logo_img} src="img/LOGO.png" alt="Logo" />
      </div>
      <div className={menustyles.introduction}>
        <b className={menustyles.tittle}>¡Bienvenido a HarmonyReflect!</b>
        <b className={menustyles.resume}>
          Únete a nuestra comunidad y deja que nuestro amigable personaje te guíe a través de hábitos positivos. 
          Registra tus actividades diarias, recibe recordatorios alegres y observa tu progreso en entornos personalizables. 
          ¡Comienza tu aventura hoy y transforma tu vida un hábito a la vez!
        </b>
        <div className={menustyles.buttons}>
          <button className={menustyles.button} id="CreateButton" onClick={() => window.location.href='/create'}> 
            Crear Cuenta
          </button>
          <button className={menustyles.button} id="LoginButton" onClick={() => window.location.href='/login'}> 
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu;