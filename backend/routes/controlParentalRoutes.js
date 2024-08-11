import { Router } from 'express';
import { registrarControlParental } from '../controller/controlParentalController.js';

const router = Router();

router.post('/control-parental', registrarControlParental);

export default router;
