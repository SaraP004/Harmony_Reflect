import { guardarPersonaje } from '../models/User.js';

const Personaje = async (req, res) => {
  const { character } = req.body;
  try {
    const personajeId = await guardarPersonaje(character);
    res.status(200).json({ message: 'Personaje guardado exitosamente', personajeId });
  } catch (error) {
    console.error('Error al guardar el personaje:', error);
    res.status(500).json({ error: 'Error al guardar el personaje' });
  }
};

export {
  Personaje,
};
