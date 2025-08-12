import { IResumenConocimiento } from '../models/IResumenConocimiento';
import { IResumenConocimientoRepository } from '../repositories/IResumenConocimientoRepository';
export declare class ResumenConocimientoService {
    private resumenConocimientoRepository;
    constructor(resumenConocimientoRepository: IResumenConocimientoRepository);
    listarResumenConocimiento(): Promise<IResumenConocimiento[]>;
}
