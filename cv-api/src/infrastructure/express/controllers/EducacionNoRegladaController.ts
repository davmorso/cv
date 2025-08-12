import { Request, Response } from 'express';
import { EducacionNoRegladaRepositoryImpl } from '../../persistence/Impl/EducacionNoRegladaRepositoryImpl';
import { InternalServerError } from '../../../shared/errors/InternalServerError';
import { EducacionNoRegladaService } from '../../../domain/services/EducacionNoRegladaServices';

const repo = new EducacionNoRegladaRepositoryImpl('ruta/al/archivo.xlsx');
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