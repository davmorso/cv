import { IResumenConocimiento } from '../../../domain/models/IResumenConocimiento';
import { IResumenConocimientoRepository } from '../../../domain/repositories/IResumenConocimientoRepository';
import { ExcelRepositoryBase } from '../../../infrastructure/persistence/ExcelRepositoryBase';

export class ResumenConocimientoRepositoryImpl extends ExcelRepositoryBase<IResumenConocimiento> implements IResumenConocimientoRepository {
    protected sheetIndex = 4;

    constructor(filePath: string) {
        super(filePath, 'RESUMEN CONOCIMIENTO');
    }

    protected validate(row: any): void {
        let data = this.map(row);
        if (!data.tecnologia || !data.nivel) {
            throw new Error('Faltan campos requeridos en resumen de conocimiento.');
        }
    }

    protected map(row: any): IResumenConocimiento {
        return {
            tecnologia: row["Tecnología"],
            anyos_experiencia: Number(row["Años experiencia"]),
            nivel: row.Nivel, 
            observaciones: row.observaciones
        };
    }

    async listarResumenConocimiento(): Promise<IResumenConocimiento[]> {
        return this.getEntities();
    }
}