import { Router } from 'express';
import { loginAdministrador } from '../controller/adminController.js'
const router = Router();

router.post('/admin', loginAdministrador);


export default router;
