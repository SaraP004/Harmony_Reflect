import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from '../styles/PageAdmin.module.css';
import NewsAdmin from './NewsAdmin';
import About from './About';
import CharactersAdmin from './CharactersAdmin'; 
import CreateAdmin from './UsersAdmin'; 

const GeneralAdmin = () => {
  return (
    <div className={styles.body}>
      <nav className={styles.navbar}>
        <ul className={styles.left}>
          <li className={styles.Inicio}>
            <Link to="/administration">
              <img id={styles.logo} src="/img/Cristhoper_Puma.png" alt="HarmonyReflect Logo" />
              HarmonyReflect
            </Link>
          </li>
        </ul>
        <ul className={styles.right}>
        <li className={styles.menuItem}><Link to="/administration/addusers">Usuarios</Link></li>
          <li className={styles.menuItem}><Link to="/administration/news">Noticias</Link></li>
          <li className={styles.menuItem}><Link to="/administration/characters">Personajes</Link></li>
          <li className={styles.menuItem}><a href="#account">Cuenta</a></li>
        </ul>
      </nav>
      
      <div className={styles.game_full_container}>
        <Routes>
          <Route path="addusers" element={<CreateAdmin />} />
          <Route path="news" element={<NewsAdmin />} />
          <Route path="about" element={<About />} />
          <Route path='characters' element= {<CharactersAdmin />}/>
          <Route path="/" element={<DefaultContentAdmin />} />
        </Routes>
      </div>
    </div>
  );
};

const DefaultContentAdmin = () => {

    const data = [
        { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
        { id: 3, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
      ];

  return (
    <div className={styles.container}>
        <div className={styles.welcome}>
        <div className={styles.welcome_full}>
          <div className={styles.welcome_img}/>
          <div className={styles.welcome_text}>
            <b>¡Bienvenido, Administrador!</b>
            <p>Gracias por ser parte de HarmonyReflect. Como administrador, tienes un rol crucial 
                en la creación y mantenimiento de una plataforma que promueve hábitos saludables y 
                bienestar en nuestra comunidad. Tu labor en la gestión de contenidos, tareas y 
                personajes permitirá que nuestros usuarios disfruten de una experiencia enriquecedora 
                y motivadora.
                Estamos entusiasmados de que estés aquí y confiamos en que tus aportes ayudarán 
                a mejorar la vida de muchas personas. ¡Gracias por tu compromiso y dedicación!</p>
            </div>
          </div>
        </div>
       <h2>Información de Usuarios</h2>
      <table border="1" style={{ width: '95%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Opcion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td> <button className={styles.button_delete}>Eliminar</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeneralAdmin;