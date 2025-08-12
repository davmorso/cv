import { Router } from 'express';
import { EducacionNoRegladaController } from '../controllers/EducacionNoRegladaController';

const router = Router();

router.get('/', EducacionNoRegladaController.listarEducacionNoReglada);

export default router;