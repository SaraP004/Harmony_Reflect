import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/userRoutes.js'; // Asegúrate de que la ruta sea correcta

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // URL de tu frontend
}));

app.use(express.json());
app.use('/api', usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
