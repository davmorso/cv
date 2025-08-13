import { Request, Response } from 'express';
import { EducacionRegladaRepositoryImpl } from '../../persistence/Impl/EducacionRegladaRepositoryImpl';
import { InternalServerError } from '../../../shared/errors/InternalServerError';
import { EducacionRegladaService } from '../../../domain/services/EducacionRegladaServices';
import path from 'path';
import { environment } from '../../../config/environment';

const excelPath = path.resolve(process.cwd(), environment.excelFilePath);
const repo = new EducacionRegladaRepositoryImpl(excelPath);
const service = new EducacionRegladaService(repo);

export class EducacionRegladaController {
    static async listarEducacionReglada(req: Request, res: Response) {
        try {
            const datos = await service.listarEducacionReglada();
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