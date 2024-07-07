import React from 'react';
import loginstyle from '../styles/page_login.module.css';

const Login = () => {
  return (
    <div className={loginstyle.body}>
    <div className={loginstyle.container}>
      <div className={loginstyle.imagen}>
        <img id={loginstyle.registra_img} src="img/LOGIN.png" alt="Login" />
      </div>
      <div className={loginstyle.space}>
        <div className={loginstyle.form}>
          <div className={loginstyle.tittle}>
            <b className={loginstyle.headline}>¡Hola! ¡Qué bueno es verte por aquí!</b>
          </div>
          <div className={loginstyle.labels}>
            <label htmlFor={loginstyle.username}>Nombre de Usuario o Correo</label>
            <input type="text" id={loginstyle.username} name="username" />
            <label htmlFor={loginstyle.password}>Contraseña</label>
            <input type="text" id={loginstyle.password} name="password" />
          </div>
          <div className={loginstyle.buttons}>
            <button className={loginstyle.button} id={loginstyle.CancelButton} onClick={() => window.location.href='/'}> 
              <img src="" alt="" />
              Cancelar
            </button>
            <button className={loginstyle.button} id={loginstyle.AcceptButton} onClick={() => window.location.href='/game'}> 
              <img src="" alt="" />
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
