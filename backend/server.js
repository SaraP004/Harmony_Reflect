import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.json());

app.use('/api', usuarioRoutes); // Usa las rutas de usuario bajo el prefijo /api

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
