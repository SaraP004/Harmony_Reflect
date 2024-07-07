import React from 'react';
import styles from '../styles/page_create.module.css';

const Create = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.space}>
          <div className={styles.form}>
            <div className={styles.tittle}>
              <b className={styles.headline}>¡NOS ALEGRA TANTO QUE QUIERAS UNIRTE!</b>
            </div>
            <div className={styles.labels}>
              <label id= {styles.username} htmlFor="username">Nombre de Usuario</label>
              <input className={styles.inputField} type="text" id="username" name="username"/>
              <label id= {styles.email} htmlFor="email">Correo electrónico</label>
              <input className={styles.inputField} type="text" id="email" name="email"/>
              <label id={styles.password} htmlFor="password">Contraseña</label>
              <input className={styles.inputField} type="text" id="password" name="password"/>
            </div>
            <div className={styles.buttons}>
              <button className={styles.button} id={styles.AcceptButton}>
                <img src="" alt="" />
                Crear
              </button>
              <button className={styles.button} id={styles.CancelButton} onClick={() => window.location.href = '/'}>
                <img src="" alt="" />
                Cancelar
              </button>
            </div>
          </div>
        </div>
        <div className={styles.imagen}>
          <img className={styles.registra_img} src="./img/RESGISTRAR.png" alt="Registrar" />
        </div>
      </div>
    </div>
  );
};

export default Create;
