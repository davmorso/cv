import { IResumenConocimiento } from '../models/IResumenConocimiento';

export interface IResumenConocimientoRepository {
    listarResumenConocimiento(): Promise<IResumenConocimiento[]>;
}