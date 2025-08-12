import { ExcelRepositoryBase } from '../../../../infrastructure/persistence/ExcelRepositoryBase';
import { IResumenConocimiento } from '../../../../domain/models/IResumenConocimiento';
import { IResumenConocimientoRepository } from '../../../../domain/repositories/IResumenConocimientoRepository';
export declare class ResumenConocimientoRepositoryImpl extends ExcelRepositoryBase<IResumenConocimiento> implements IResumenConocimientoRepository {
    protected sheetIndex: number;
    constructor(filePath: string);
    protected validate(row: any): void;
    protected map(row: any): IResumenConocimiento;
    listarResumenConocimiento(): Promise<IResumenConocimiento[]>;
}
