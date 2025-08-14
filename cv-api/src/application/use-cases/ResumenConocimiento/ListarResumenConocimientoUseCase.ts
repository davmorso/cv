import { IResumenConocimiento } from '../../../domain/models/IResumenConocimiento';
import { IResumenConocimientoRepository } from '../../../domain/repositories/IResumenConocimientoRepository';

export class ListarResumenConocimientoUseCase {
    private resumenConocimientoRepository: IResumenConocimientoRepository;

    constructor(resumenConocimientoRepository: IResumenConocimientoRepository) {
        this.resumenConocimientoRepository = resumenConocimientoRepository;
    }

    async execute(): Promise<IResumenConocimiento[]> {
        return this.resumenConocimientoRepository.listarResumenConocimiento();
    }
}