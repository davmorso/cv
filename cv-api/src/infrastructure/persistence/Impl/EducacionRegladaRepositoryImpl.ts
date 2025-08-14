import { IEducacionReglada } from '../../../domain/models/IEducacionReglada';
import { IEducacionRegladaRepository } from '../../../domain/repositories/IEducacionRegladaRepository';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';


export class EducacionRegladaRepositoryImpl 
    extends ExcelRepositoryBase<IEducacionReglada> 
    implements IEducacionRegladaRepository {
    
    protected sheetIndex = 1;

    constructor(filePath: string) {
        super(filePath, 'EDUCACION REGLADA');
    }
    
    
    protected validate(row: any): void {
        let data = this.map(row);
        if (!data.anyo || !data.formacion || !data.centro) {
            throw new Error('Faltan campos requeridos en educación reglada.');
        }
    }

    protected map(row: any): IEducacionReglada {
        return {
            anyo: row["Año"],
            formacion: row["Formación"],
            centro: row["Centro"],
            detalle: row["Detalle"],
            observaciones: row["Observaciones"] 
        };
    }

     async listarEducacionReglada(): Promise<IEducacionReglada[]> {
        return this.getEntities();
    }
}