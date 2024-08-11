import { Router } from 'express';
import { crearUsuario, loginUsuario } from '../controller/userController.js';
import { registrarControlParental } from '../controller/controlParentalController.js';

const router = Router();

router.post('/create', crearUsuario);
router.post('/login', loginUsuario);
router.post('/control-parental', registrarControlParental);

export default router;
