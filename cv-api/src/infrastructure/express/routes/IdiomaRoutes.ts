import { Router } from 'express';
import { IdiomaController } from '../controllers/IdiomaController';

const router = Router();

router.get('/', IdiomaController.listarIdiomas);

export default router;