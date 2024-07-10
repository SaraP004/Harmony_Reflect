import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from '../styles/page_game.module.css';
import CheckListItem from '../Aplicaciones/CheckListItem';
import useTips from '../Aplicaciones/tipscont';
import useCharacterAnimation from '../Aplicaciones/animation';
import News from './News';
import About from './About';
import Wallpapers from './Wallpapers'; // Asegúrate de importar Wallpapers

const Game = () => {
  return (
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
          <li className={styles.menuItem}><Link to="/game/wallpapers">Wallpapers</Link></li>
          <li className={styles.menuItem}><Link to="/game/about">Acerca de</Link></li>
          <li className={styles.menuItem}><a href="#account">Cuenta</a></li>
        </ul>
      </nav>
      
      <div className={styles.game_full_container}>
        <Routes>
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
          <Route path="wallpapers" element={<Wallpapers />} /> {/* Ruta para Wallpapers */}
          <Route path="/" element={<DefaultContent />} />
        </Routes>
      </div>
    </div>
  );
};

const DefaultContent = () => {
  // Objeto que contiene las diferentes imágenes del personaje según su estado
  const characterImages = {
    default: [
      '/img/animation_happy/happy1.png',
      '/img/animation_happy/happy2.png',
    ],
    completedOne: [
      '/img/animation_happy/happy1.png',
      '/img/animation_happy/happy2.png',
    ],
    completedTwo: [
      '/img/animation_very_happy/veryHappy1.png',
      '/img/animation_very_happy/veryHappy2.png',
    ],
    sad: [
      '/img/animation_sad/sad1.png',
      '/img/animation_sad/sad2.png',
    ],
  };

  // Estado para la lista de tareas
  const [checklist, setChecklist] = useState([
    { button: 'Hidratate', confirmed: false, isVisible: true, imageSrc: '/img/Drink.png' },
    { button: 'Descansa por hoy', confirmed: false, isVisible: true, imageSrc: '/img/Sleep.png' },
    { button: 'Come una fruta', confirmed: false, isVisible: true, imageSrc: '/img/Eat.png' },
    { button: 'Haz un poco de ejercicio', confirmed: false, isVisible: true, imageSrc: '/img/Walk.png' },
  ]);

  const [animationType, setAnimationType] = useState('default');
  const characterImage = useCharacterAnimation(characterImages, animationType, setAnimationType);

  // Obtener el tip actual usando el custom hook
  const currentTip = useTips();

  // Maneja la confirmación de una tarea
  const handleConfirmation = (index, confirmed) => {
    const newChecklist = checklist.map((item, i) => {
      if (i === index) {
        return { ...item, confirmed };
      }
      return item;
    });

    setChecklist(newChecklist.map(item => ({ ...item, isVisible: true })));

    const confirmedCount = newChecklist.filter(item => item.confirmed).length;
    if (confirmed) {
      if (confirmedCount >= 2) {
        setAnimationType('completedTwo');
      } else if (confirmedCount >= 1) {
        setAnimationType('completedOne');
      } else {
        setAnimationType('default');
      }
    } else {
      setAnimationType('sad');
    }
  };

  // Maneja el clic en un botón de la lista de tareas
  const handleButtonClick = (index) => {
    const newChecklist = checklist.map((item, i) => ({
      ...item,
      isVisible: i === index,
    }));
    setChecklist(newChecklist);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bottom}>
        <Link to="/game/wallpapers" className={styles.linkContainer}>
          <p>¡Disfruta de nuestros fondos de pantalla!</p>
        </Link>
      </div>

      <div className={styles.game_full}>
        <div className={styles.game}>
          <div className={styles.background_game}>
            <img id={styles.character} src={characterImage} alt="Character" />
          </div>
          <div className={styles.checklist_options}>
            {checklist.map((item, index) => (
              <CheckListItem
                key={index}
                button={item.button}
                onConfirm={(confirmed) => handleConfirmation(index, confirmed)}
                isVisible={item.isVisible}
                handleButtonClick={() => handleButtonClick(index)}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
        <div className={styles.tips}>
          <div className={styles.text_img}>
            <div className={styles.text}>
              <b>TIPS DEL DIA:</b>
              <p>{currentTip}</p>
            </div>
            <img id={styles.water} src="/img/Water.png" alt="Tip" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
