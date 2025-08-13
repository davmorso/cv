import { Request, Response } from 'express';
import { ResumenConocimientoRepositoryImpl } from '../../persistence/Impl/ResumenConocimientoRepositoryImpl';
import { ResumenConocimientoService } from '../../../domain/services/ResumenConocimientoServices';
import { InternalServerError } from '../../../shared/errors/InternalServerError';
import path from 'path';
import { environment } from '../../../config/environment';

const excelPath = path.resolve(process.cwd(), environment.excelFilePath);
const repo = new ResumenConocimientoRepositoryImpl(excelPath);
const service = new ResumenConocimientoService(repo);

export class ResumenConocimientoController {
    static async listarResumenConocimiento(req: Request, res: Response) {
        try {
            const datos = await service.listarResumenConocimiento();
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