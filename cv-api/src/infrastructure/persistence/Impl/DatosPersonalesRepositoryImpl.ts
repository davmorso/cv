import { IDatosPersonales } from '../../../domain/models/IDatosPersonales';
import { IDatosPersonalesRepository } from '../../../domain/repositories/IDatosPersonalesRepository';
import { ExcelRepositoryBase } from '../ExcelRepositoryBase';

export class DatosPersonalesRepositoryImpl extends ExcelRepositoryBase<IDatosPersonales> implements IDatosPersonalesRepository {
    protected sheetIndex = 0;

    constructor(filePath: string) {
        super(filePath, 'DATOS PERSONALES');
    }

    protected validate(row: any): void {
        let data = this.map(row);
        
        if (!data.nombre_completo || !data.email || !data.telefono_movil) {
            throw new Error('Faltan campos requeridos en los datos personales.');
        }
    }

    protected map(row: any): IDatosPersonales {
         const campoToKey: Record<string, keyof IDatosPersonales> = {
            'Nombre completo': 'nombre_completo',
            'NIF': 'nif',
            'Fecha nacimiento': 'fecha_nacimiento',
            'Nacionalidad': 'nacionalidad',
            'Dirección': 'direccion',
            'Teléfono móvil': 'telefono_movil',
            'Teléfono particular': 'telefono_particular',
            'Email': 'email',
            'Skype': 'skype'
        };

        const result = {} as IDatosPersonales;
        for (const item of row) {
            const key = campoToKey[item.Campo];
            if (key) {
                result[key] = item.Valor;
            }
        }
        return result;
    }


    private toClassInstance<T extends object>(row: any, clazz: new () => T): T {
        const instance = new clazz();
        Object.assign(instance, row);
        return instance;
    }

    async obtenerDatosPersonales(): Promise<IDatosPersonales> {
        return this.getEntity();
    }
}