import { IIdioma } from '../../../domain/models/IIdioma';
import { IIdiomaRepository } from '../../../domain/repositories/IIdiomaRepository';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';
export declare class IdiomaRepositoryImpl extends ExcelRepositoryBase<IIdioma> implements IIdiomaRepository {
    protected sheetIndex: number;
    constructor(filePath: string);
    protected validate(row: any): void;
    protected map(row: any): IIdioma;
    listarIdiomas(): Promise<IIdioma[]>;
}
