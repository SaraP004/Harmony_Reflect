import pg from 'pg';
import bcrypt from 'bcrypt';

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'HarmonyReflect',
  password: '1234',
  port: 5432,
});

const verificarUsuario = async (nombre_usuario, contraseña) => {
  try {
    const result = await pool.query('SELECT * FROM Usuario WHERE nombre_usuario = $1', [nombre_usuario]);

    if (result.rows.length > 0) {
      const usuario = result.rows[0];
      const hashedPassword = usuario.contraseña;

      // Verificar que hashedPassword y contraseña no sean null o undefined
      if (hashedPassword && contraseña) {
        const match = await bcrypt.compare(contraseña, hashedPassword);
        if (match) {
          return usuario;
        }
      }
    }
    return null; // Si no coincide o no se encuentra el usuario
  } catch (error) {
    console.error('Error al verificar usuario:', error);
    throw error;
  }
};

const crearUsuario = async (usuario) => {
  const { nombre_completo, nombre_usuario, correo, contraseña, edad, personaje } = usuario;
  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crear usuario y obtener su ID
    const result = await pool.query(
      'INSERT INTO Usuario (Nombre_Completo, Nombre_Usuario, Correo, Contraseña, Edad) VALUES ($1, $2, $3, $4, $5) RETURNING ID',
      [nombre_completo, nombre_usuario, correo, hashedPassword, edad]
    );

    const nuevoUsuarioId = result.rows[0].id;

    // Guardar personaje si se proporciona
    if (personaje) {
      await guardarPersonaje(personaje, nuevoUsuarioId);
    }

    return { id: nuevoUsuarioId, ...usuario };
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
};

const guardarPersonaje = async (nombre_personaje, usuario_id) => {
  try {
    // Buscar el ID del personaje por nombre
    const queryText1 = `
      SELECT ID 
      FROM Personajes
      WHERE Nombre_Personaje = $1;
    `;
    const result = await pool.query(queryText1, [nombre_personaje]);

    let personaje_id;
    if (result.rows.length > 0) {
      // Si el personaje ya existe, usar su ID
      personaje_id = result.rows[0].id;
    } else {
      // Si el personaje no existe, insertarlo
      const queryText2 = `
        INSERT INTO Personajes (Nombre_Personaje)
        VALUES ($1)
        RETURNING ID;
      `;
      const insertResult = await pool.query(queryText2, [nombre_personaje]);
      personaje_id = insertResult.rows[0].id;
    }

    // Insertar en Usuario_Personaje si no existe ya la asociación
    const queryText3 = `
      INSERT INTO Usuario_Personaje (Usuario_ID, Personaje_ID)
      VALUES ($1, $2)
      ON CONFLICT (Usuario_ID, Personaje_ID) DO NOTHING;
    `;
    await pool.query(queryText3, [usuario_id, personaje_id]);

    console.log("Personaje guardado exitosamente");
  } catch (error) {
    console.error("Error al guardar el personaje:", error);
    throw error;
  }
};

export {
  verificarUsuario,
  crearUsuario,
  guardarPersonaje, 
};
