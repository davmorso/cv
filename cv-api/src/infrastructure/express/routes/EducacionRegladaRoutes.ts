import { Router } from 'express';
import { EducacionRegladaController } from '../controllers/EducacionRegladaController';

const router = Router();

router.get('/', EducacionRegladaController.listarEducacionReglada);

export default router;