import { IResumenConocimiento } from '../../../domain/models/IResumenConocimiento';
import { IResumenConocimientoRepository } from '../../../domain/repositories/IResumenConocimientoRepository';
import { ExcelRepositoryBase } from '../../../infrastructure/persistence/ExcelRepositoryBase';

export class ResumenConocimientoRepositoryImpl extends ExcelRepositoryBase<IResumenConocimiento> implements IResumenConocimientoRepository {
    protected sheetIndex = 4;

    constructor(filePath: string) {
        super(filePath, 'RESUMEN CONOCIMIENTO');
    }

    protected validate(row: any): void {
        if (!row.tecnologia || !row.nivel) {
            throw new Error('Faltan campos requeridos en resumen de conocimiento.');
        }
    }

    protected map(row: any): IResumenConocimiento {
        return {
            tecnologia: row.tecnologia,
            anyos_experiencia: Number(row.anyos_experiencia),
            nivel: row.nivel,
            observaciones: row.observaciones
        };
    }

    async listarResumenConocimiento(): Promise<IResumenConocimiento[]> {
        return this.getEntities();
    }
}