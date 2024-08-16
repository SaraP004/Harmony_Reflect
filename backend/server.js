import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/userRoutes.js';
import characterRoutes from './routes/characterRoutes.js';
import aiRoutes from './routes/ai.js';
import connectDB from './config/db.js'; 
import notificationRoutes from './routes/notificationRoutes.js'; 

const app = express();
connectDB(); // Conecta a la base de dato

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.json());

app.use('/api', usuarioRoutes); 
app.use('/api', characterRoutes); 
app.use('/api', aiRoutes); 
app.use('/api', notificationRoutes); 
app.use('/api', notificationRoutes); // Usa las rutas de notificaciones

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
