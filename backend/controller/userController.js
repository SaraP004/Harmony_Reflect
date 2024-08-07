import { crearUsuario as crearUsuarioModel, verificarUsuario } from '../models/User.js';

const loginUsuario = async (req, res) => {
  const { nombre_usuario, contraseña } = req.body;
  try {
    const usuario = await verificarUsuario(nombre_usuario, contraseña);
    if (usuario) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

const crearUsuario = async (req, res) => {
  try {
    const newUsuario = await crearUsuarioModel(req.body);
    res.status(201).json(newUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  loginUsuario,
  crearUsuario
};
