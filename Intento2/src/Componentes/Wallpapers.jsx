import React from 'react';
import styles from '../styles/Wallpapers.module.css';

const wallpapers = [
  { id: 1, src: '/img/background.jpeg', alt: 'Wallpaper 1' },
  // Agrega más imágenes aquí
];

const Wallpapers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {wallpapers.map(wallpaper => (
          <div key={wallpaper.id} className={styles.imageContainer}>
            <img
              src={wallpaper.src}
              alt={wallpaper.alt}
              className={styles.wallpaper}
            />
            <a href={wallpaper.src} download className={styles.downloadButton}>
              Descargar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallpapers;
