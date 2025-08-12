import { Request, Response } from 'express';
import { ResumenConocimientoRepositoryImpl } from '../../persistence/Impl/ResumenConocimientoRepositoryImpl';
import { InternalServerError } from '../../../shared/errors/InternalServerError';
import { ResumenConocimientoService } from '../../../domain/services/ResumenConocimientoServices';

const repo = new ResumenConocimientoRepositoryImpl('ruta/al/archivo.xlsx');
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