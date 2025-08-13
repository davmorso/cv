import { Request, Response } from 'express';
import { DatosPersonalesRepositoryImpl } from '../../persistence/Impl/DatosPersonalesRepositoryImpl';
import { DatosPersonalesService } from '../../../domain/services/DatosPersonalesServices';
import { InternalServerError } from '../../../shared/errors/InternalServerError';
import path from 'path';
import { environment } from '../../../config/environment';

const excelPath = path.resolve(process.cwd(), environment.excelFilePath);
const repo = new DatosPersonalesRepositoryImpl(excelPath);
const service = new DatosPersonalesService(repo);

export class DatosPersonalesController {
    static async obtenerDatosPersonales(req: Request, res: Response) {
        try {
            const datos = await service.obtenerDatosPersonales();
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