import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from '../styles/page_game.module.css';

import About from './About';
import Wallpapers from './Wallpapers';


const Game = () => {
  return (
    <>
      <div className={styles.body}>
        <nav className={styles.navbar}>
          <ul className={styles.left}>
            <li className={styles.Inicio}>
              <Link to="/game">
                <img id={styles.logo} src="/img/LOGO.png" alt="HarmonyReflect Logo" />
                HarmonyReflect
              </Link>
            </li>
          </ul>
          <ul className={styles.right}>
            <li className={styles.menuItem}><Link to="/game/wallpapers">Fondos</Link></li>
            <li className={styles.menuItem}><Link to="/game/about">Acerca de</Link></li>
            <li className={styles.menuItem}><a href="#account">Cuenta</a></li>
          </ul>
        </nav>
        
        <div className={styles.game_full_container}>
          <Routes>
            <Route path="news" element={<Wallpapers />} />
            <Route path="about" element={<About />} />
            <Route path="/" element={<DefaultContent />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

const DefaultContent = () => (
  <div className={styles.container}>
    <div className={styles.bottom}>
      <p>¡Disfruta de nuestros fondos de pantalla!</p>
    </div>
    <div className={styles.game_full}>
      <div className={styles.game}>
        <div className={styles.background_game}>
          <img id={styles.character} src="/img/animation_happy/happy1.png" alt="Personaje feliz" />
        </div>
        <div className={styles.checklist_options}></div>
      </div>
      <div className={styles.tips}>
        <div className={styles.text_img}>
          <div className={styles.text}>
            <b>TIPS DEL DIA:</b>
            <p>
              Aqui eran los tips que iremos poniendo a medida que vayan programando, no se olviden de que este sitio es para poner toda la información. Texto largo por si acaso xd
            </p>
          </div>
          <img src="/img/Water.png" alt="Consejo del día" />
        </div>
      </div>
    </div>
  </div>
);

export default Game;

