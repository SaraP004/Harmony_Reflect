import express from 'express';
import { Personaje } from '../controller/characterController.js';

const router = express.Router();

router.post('/saveCharacter', Personaje);

export default router;
