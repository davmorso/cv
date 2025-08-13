import { Request, Response } from 'express';
import { ExperienciaRepositoryImpl } from '../../persistence/Impl/ExperienciaRepositoryImpl';
import { InternalServerError } from '../../../shared/errors/InternalServerError';
import { ExperienciaService } from '../../../domain/services/ExperienciaRepositoryServices';
import path from 'path';
import { environment } from '../../../config/environment';

const excelPath = path.resolve(process.cwd(), environment.excelFilePath);
const repo = new ExperienciaRepositoryImpl(excelPath);
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