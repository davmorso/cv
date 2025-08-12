import { IExperiencia } from '../../../domain/models/IExperiencia';
import { IExperienciaRepository } from '../../../domain/repositories/IExperienciaRepository';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';
export declare class ExperienciaRepositoryImpl extends ExcelRepositoryBase<IExperiencia> implements IExperienciaRepository {
    protected sheetIndex: number;
    constructor(filePath: string);
    protected validate(row: any): void;
    protected map(row: any): IExperiencia;
    listarExperiencia(): Promise<IExperiencia[]>;
}
