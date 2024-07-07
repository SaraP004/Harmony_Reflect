import React from 'react';
import styles from '../styles/page_game.module.css';

const Game = () => {
  return (
    <>
      <div className={styles.body}>
        <nav className={styles.navbar}>
          <ul className={styles.left}>
            <li className={styles.Inicio}>
              <a href="page_game.html">
                <img id={styles.logo} src="img/LOGO.png" alt="HarmonyReflect Logo" />
                HarmonyReflect
              </a>
            </li>
          </ul>
          <ul className={styles.right}>
            <li className={styles.menuItem}><a href="#news">Noticias</a></li>
            <li className={styles.menuItem}><a href="#services">Servicios</a></li>
            <li className={styles.menuItem}><a href="#about">Acerca de</a></li>
            <li className={styles.menuItem}><a href="#account">Cuenta</a></li>
          </ul>
        </nav>

        <div className={styles.game_full}>
          <div className={styles.container}>
            <div className={styles.bottom}>
              <p>¡Disfruta de nuestros fondos de pantalla!</p>
            </div>
            <div className={styles.game_full}>
              <div className={styles.game}>
                <div className={styles.background_game}>
                  <img id={styles.character} src="img/animation_happy/happy1.png" alt="" />
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
                  <img src="img/Water.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>

  );
};

export default Game;

