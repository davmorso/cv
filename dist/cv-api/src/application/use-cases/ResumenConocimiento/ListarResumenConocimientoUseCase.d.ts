import { IResumenConocimiento } from '../../../domain/models/IResumenConocimiento';
import { IResumenConocimientoRepository } from '../../../domain/repositories/IResumenConocimientoRepository';
export declare class ListarResumenConocimientoUseCase {
    private resumenConocimientoRepository;
    constructor(resumenConocimientoRepository: IResumenConocimientoRepository);
    execute(): Promise<IResumenConocimiento[]>;
}
