import { Router } from 'express';
import { ExperienciaController } from '../controllers/ExperienciaController';

const router = Router();

router.get('/', ExperienciaController.listarExperiencia);

export default router;