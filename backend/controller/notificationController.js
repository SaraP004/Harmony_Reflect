// backend/controller/notificationController.js
import Notification from '../models/notificationModel.js';

// Obtiene las notificaciones activas del día
const getNotifications = async (req, res) => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5); // Obtiene la hora actual en formato HH:mm

  try {
    const notifications = await Notification.find({ time: currentTime, active: true });
    res.json(notifications);
  } catch (error) {
    console.error('Error al obtener notificaciones:', error);
    res.status(500).json({ message: 'Error al obtener notificaciones' });
  }
};

export { getNotifications };
