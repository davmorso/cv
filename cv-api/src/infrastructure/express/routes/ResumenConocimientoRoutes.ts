import { Router } from 'express';
import { ResumenConocimientoController } from '../controllers/ResumenConocimientoController';

const router = Router();

router.get('/', ResumenConocimientoController.listarResumenConocimiento);

export default router;