import { IEducacionReglada } from '../../../domain/models/IEducacionReglada';
import { IEducacionRegladaRepository } from '../../../domain/repositories/IEducacionRegladaRepository';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';
export declare class EducacionRegladaRepositoryImpl extends ExcelRepositoryBase<IEducacionReglada> implements IEducacionRegladaRepository {
    protected sheetIndex: number;
    constructor(filePath: string);
    protected validate(row: any): void;
    protected map(row: any): IEducacionReglada;
    listarEducacionReglada(): Promise<IEducacionReglada[]>;
}
