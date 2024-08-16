import { verificarAdministrador } from '../models/admin.js';

const loginAdministrador = async (req, res) => {
  const { nombre_usuario, contraseña } = req.body;

  try {
    const admin = await verificarAdministrador(nombre_usuario, contraseña);
    if (admin) {
      return res.status(200).json({
        message: 'Inicio de sesión exitoso como administrador',
        userId: admin.id, // Suponiendo que tienes un ID para administradores
        tipo_usuario: 'administrador',
      });
    } else {
      return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

export{
    loginAdministrador
}
