import { IDatosPersonales } from '../../../domain/models/IDatosPersonales';
import { IDatosPersonalesRepository } from '../../../domain/repositories/IDatosPersonalesRepository';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';

export class DatosPersonalesRepositoryImpl extends ExcelRepositoryBase<IDatosPersonales> implements IDatosPersonalesRepository {
    protected sheetIndex = 0;

    constructor(filePath: string) {
        super(filePath, 'DATOS PERSONALES');
    }

    protected validate(row: any): void {
        if (!row.nombre_completo || !row.email) {
            throw new Error('Faltan campos requeridos en los datos personales.');
        }
    }

    protected map(row: any): IDatosPersonales {
        return {
            nombre_completo: row.nombre_completo,
            nif: row.nif,
            fecha_nacimiento: row.fecha_nacimiento,
            nacionalidad: row.nacionalidad,
            direccion: row.direccion,
            telefono_movil: row.telefono_movil,
            telefono_particular: row.telefono_particular,
            email: row.email,
            skype: row.skype
        };
    }

    async obtenerDatosPersonales(): Promise<IDatosPersonales> {
        return this.getEntity();
    }
}