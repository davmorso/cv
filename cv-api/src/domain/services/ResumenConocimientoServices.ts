import { IResumenConocimiento } from '../models/IResumenConocimiento';
import { IResumenConocimientoRepository } from '../repositories/IResumenConocimientoRepository';

export class ResumenConocimientoService {
    private resumenConocimientoRepository: IResumenConocimientoRepository;

    constructor(resumenConocimientoRepository: IResumenConocimientoRepository) {
        this.resumenConocimientoRepository = resumenConocimientoRepository;
    }

    async listarResumenConocimiento(): Promise<IResumenConocimiento[]> {
        return this.resumenConocimientoRepository.listarResumenConocimiento();
    }
}