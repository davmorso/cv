import { IIdioma } from '../../../domain/models/IIdioma';
import { IIdiomaRepository } from '../../../domain/repositories/IIdiomaRepository';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';

export class IdiomaRepositoryImpl extends ExcelRepositoryBase<IIdioma> implements IIdiomaRepository {
    protected sheetIndex = 3;

    constructor(filePath: string) {
        super(filePath, 'IDIOMAS');
    }

    protected validate(row: any): void {
        let data = this.map(row);
        if (!data.idioma || !data.nivel) {
            throw new Error('Faltan campos requeridos en idiomas.');
        }
    }

    protected map(row: any): IIdioma {
        return {
            idioma: row.Idioma,
            nivel: row.Nivel,
            observaciones: row.observaciones
        };
    }

    async listarIdiomas(): Promise<IIdioma[]> {
        return this.getEntities();
    }
}