import { IDatosPersonales } from '../../../domain/models/IDatosPersonales';
import { IDatosPersonalesRepository } from '../../../domain/repositories/IDatosPersonalesRepository';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';
export declare class DatosPersonalesRepositoryImpl extends ExcelRepositoryBase<IDatosPersonales> implements IDatosPersonalesRepository {
    protected sheetIndex: number;
    constructor(filePath: string);
    protected validate(row: any): void;
    protected map(row: any): IDatosPersonales;
    private toClassInstance;
    obtenerDatosPersonales(): Promise<IDatosPersonales>;
}
