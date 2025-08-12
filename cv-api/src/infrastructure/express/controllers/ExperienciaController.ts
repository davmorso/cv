import { Request, Response } from 'express';
import { ExperienciaRepositoryImpl } from '../../persistence/Impl/ExperienciaRepositoryImpl';
import { InternalServerError } from '../../../shared/errors/InternalServerError';
import { ExperienciaService } from '../../../domain/services/ExperienciaRepositoryServices';

const repo = new ExperienciaRepositoryImpl('ruta/al/archivo.xlsx');
const service = new ExperienciaService(repo);

export class ExperienciaController {
    static async listarExperiencia(req: Request, res: Response) {
        try {
            const datos = await service.listarExperiencia();
            res.json(datos);
        } catch (ex) {
            if (ex instanceof Error) {
                throw new InternalServerError(ex.message);
            } else {
                throw new InternalServerError('Unknown error');
            }
        }
    }
}