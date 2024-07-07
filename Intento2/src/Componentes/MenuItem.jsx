import React from 'react';
import '../../styles/MenuItem.css'; // Ajusta la ruta según la estructura de tu proyecto

const MenuItem = ({ href, children }) => {
  return (
    <li className="menuItem">
      <a href={href}>{children}</a>
    </li>
  );
};

export default MenuItem;