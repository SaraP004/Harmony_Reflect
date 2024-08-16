import { Router } from 'express';
import { ai } from '../controller/ai_controller.js';
const router = Router();

router.post('/ai', ai);

export default router;
