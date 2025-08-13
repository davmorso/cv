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
        let data = this.map(row);
        if (!data.curso || !data.plataforma || !data.anyo) {
            throw new Error('Faltan campos requeridos en educación no reglada.');
        }
    }

    protected map(row: any): IEducacionNoReglada {
        return {
            anyo: row["Año"],
            curso: row["Curso / Certificación"],
            plataforma: row["Entidad / Plataforma"],
            detalle: row["Horas / Detalles"]
        };
    }

    async listarEducacionNoReglada(): Promise<IEducacionNoReglada[]> {
        return this.getEntities();
    }
}