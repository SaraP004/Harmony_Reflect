// backend/models/notificationModel.js
import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  time: { type: String, required: true },
  active: { type: Boolean, required: true }
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
