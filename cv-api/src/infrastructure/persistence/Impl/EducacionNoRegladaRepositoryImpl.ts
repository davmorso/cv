import { IEducacionNoRegladaRepository } from '@/domain/repositories/IEducacionNoRegladaRepository';
import { IEducacionNoReglada } from '../../../domain/models/IEducacionNoReglada';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';

export class EducacionNoRegladaRepositoryImpl 
    extends ExcelRepositoryBase<IEducacionNoReglada> 
    implements IEducacionNoRegladaRepository {
    protected sheetIndex = 2;

    constructor(filePath: string) {
        super(filePath, 'EDUCACION NO REGLADA');
    }

    protected validate(row: any): void {
        if (!row.institucion || !row.titulo) {
            throw new Error('Faltan campos requeridos en educación no reglada.');
        }
    }

    protected map(row: any): IEducacionNoReglada {
        return {
            anyo: row["Año"],
            curso: row["Curso"],
            plataforma: row["Plataforma"],
            detalle: row["Detalle"],
        };
    }

    async listarEducacionNoReglada(): Promise<IEducacionNoReglada[]> {
        return this.getEntities();
    }
}