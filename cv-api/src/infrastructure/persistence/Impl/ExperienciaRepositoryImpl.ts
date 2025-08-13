import { IExperiencia } from '../../../domain/models/IExperiencia';
import { IExperienciaRepository } from '../../../domain/repositories/IExperienciaRepository';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';

export class ExperienciaRepositoryImpl extends ExcelRepositoryBase<IExperiencia> implements IExperienciaRepository {
    protected sheetIndex = 2;

    constructor(filePath: string) {
        super(filePath, 'EXPERIENCIA');
    }

    protected validate(row: any): void {
        let data = this.map(row);
        if (!data.empresa || !data.puesto) {
            throw new Error('Faltan campos requeridos en experiencia.');
        }
    }

    protected map(row: any): IExperiencia {
        return {
            fecha: row.Fecha,
            empresa: row.Empresa,
            cliente_1: row["Cliente 1"],
            cliente_2: row["Cliente 2"],
            puesto: row.Puesto,
            sector: row.Sector,
            descripcion: row["Descripción"],  
            tecnologias: row["Tecnologías"],
            observaciones: row.Observaciones
        };
    }

    async listarExperiencia(): Promise<IExperiencia[]> {
        return this.getEntities();
    }
}