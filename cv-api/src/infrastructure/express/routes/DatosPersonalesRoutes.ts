import { Router } from 'express';
import { DatosPersonalesController } from '../controllers/DatosPersonalesController';

const router = Router();

router.get('/', DatosPersonalesController.obtenerDatosPersonales);

export default router;