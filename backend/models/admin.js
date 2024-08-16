import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'HarmonyReflect',
  password: '1234',
  port: 5432,
});

const verificarAdministrador = async (nombre_usuario, contraseña) => {
  try {
    const result = await pool.query('SELECT * FROM Administrador WHERE Nombre_Usuario = $1', [nombre_usuario]);

    if (result.rows.length > 0) {
      const admin = result.rows[0];
      const storedPassword = admin['contraseña'];

      if (contraseña === storedPassword) {
        return admin;
      } else {
        console.log('Contraseñas no coinciden');
      }
    } else {
      console.log('Administrador no encontrado');
    }

    return null;
  } catch (error) {
    console.error('Error al verificar administrador:', error);
    throw error;
  }
};

export {
  verificarAdministrador,
};
