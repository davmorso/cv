import { IEducacionNoRegladaRepository } from '@/domain/repositories/IEducacionNoRegladaRepository';
import { IEducacionNoReglada } from '../../../domain/models/IEducacionNoReglada';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';
export declare class EducacionNoRegladaRepositoryImpl extends ExcelRepositoryBase<IEducacionNoReglada> implements IEducacionNoRegladaRepository {
    protected sheetIndex: number;
    constructor(filePath: string);
    protected validate(row: any): void;
    protected map(row: any): IEducacionNoReglada;
    listarEducacionNoReglada(): Promise<IEducacionNoReglada[]>;
}
