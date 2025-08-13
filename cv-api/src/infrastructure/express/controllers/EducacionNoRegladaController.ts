import { Request, Response } from 'express';
import { EducacionNoRegladaRepositoryImpl } from '../../persistence/Impl/EducacionNoRegladaRepositoryImpl';
import { InternalServerError } from '../../../shared/errors/InternalServerError';
import { EducacionNoRegladaService } from '../../../domain/services/EducacionNoRegladaServices';
import path from 'path';
import { environment } from '../../../config/environment';

const excelPath = path.resolve(process.cwd(), environment.excelFilePath);
const repo = new EducacionNoRegladaRepositoryImpl(excelPath);
const service = new EducacionNoRegladaService(repo);

export class EducacionNoRegladaController {
    static async listarEducacionNoReglada(req: Request, res: Response) {
        try {
            const datos = await service.listarEducacionNoReglada();
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