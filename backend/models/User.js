import pg from 'pg';
import bcrypt from 'bcrypt';

const { Pool } = pg;

// Configuración de la base de datos
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'HarmonyReflect',
  password: '1234',  // Asegúrate de usar la contraseña correcta
  port: 5432,
});

// Verificar usuario
const verificarUsuario = async (nombre_usuario, contraseña) => {
  try {
    const result = await pool.query('SELECT * FROM Usuario WHERE nombre_usuario = $1', [nombre_usuario]);
    if (result.rows.length > 0) {
      const hashedPassword = result.rows[0].contraseña;
      const match = await bcrypt.compare(contraseña, hashedPassword);
      if (match) {
        return result.rows[0];
      }
    }
    return null;
  } catch (error) {
    console.error('Error al verificar usuario:', error);
    throw error;
  }
};

// Crear usuario
const crearUsuario = async (usuario) => {
  const { nombre_completo, nombre_usuario, correo, contraseña, edad } = usuario;
  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const result = await pool.query(
      'INSERT INTO Usuario (nombre_completo, nombre_usuario, correo, contraseña, edad) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nombre_completo, nombre_usuario, correo, hashedPassword, edad]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
};

export {
  verificarUsuario,
  crearUsuario
};
