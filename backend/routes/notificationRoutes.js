// backend/routes/notificationRoutes.js
import express from 'express';
import { getNotifications } from '../controller/notificationController.js';

const router = express.Router();

// Ruta para obtener las notificaciones del día
router.get('/notifications', getNotifications);

export default router;
