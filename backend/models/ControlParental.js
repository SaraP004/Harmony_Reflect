import pool from '../config/database.js';

const crearControlParental = async (nombre_completo, username, email, password, relacion) => {
  const client = await pool.connect();
  try {
    const query = `
      INSERT INTO Control_Parental (Nombre_Completo, Nombre_Usuario, Correo, Contraseña, Tipo)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const result = await client.query(query, [nombre_completo, username, email, password, relacion]);
    return result.rows[0];
  } catch (error) {
    console.error('Error al crear el registro de control parental:', error);
    throw error;
  } finally {
    client.release();
  }
};

export { crearControlParental };
