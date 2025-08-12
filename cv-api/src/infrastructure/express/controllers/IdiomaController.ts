import { Request, Response } from 'express';
import { IdiomaRepositoryImpl } from '../../persistence/Impl/IdiomaRepositoryImpl';
import { InternalServerError } from '../../../shared/errors/InternalServerError';
import { IdiomaService } from '../../../domain/services/IdiomaServices';

const repo = new IdiomaRepositoryImpl('ruta/al/archivo.xlsx');
const service = new IdiomaService(repo);

export class IdiomaController {
    static async listarIdiomas(req: Request, res: Response) {
        try {
            const datos = await service.listarIdiomas();
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