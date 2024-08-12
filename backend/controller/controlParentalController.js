import { crearControlParental } from '../models/ControlParental.js';

const registrarControlParental = async (req, res) => {
  try {
    const { nombre_completo, username, email, password, relacion } = req.body;
    await crearControlParental(nombre_completo, username, email, password, relacion);
    res.status(201).json({ message: 'Registro de control parental exitoso' });
  } catch (error) {
    console.error('Error al registrar control parental:', error);
    res.status(500).json({ message: 'Error al registrar control parental' });
  }
};

export { registrarControlParental };
