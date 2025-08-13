"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosPersonalesRepositoryImpl = void 0;
const ExcelRepositoryBase_1 = require("../ExcelRepositoryBase");
class DatosPersonalesRepositoryImpl extends ExcelRepositoryBase_1.ExcelRepositoryBase {
    sheetIndex = 0;
    constructor(filePath) {
        super(filePath, 'DATOS PERSONALES');
    }
    validate(row) {
        let data = this.map(row);
        if (!data.nombre_completo || !data.email || !data.telefono_movil) {
            throw new Error('Faltan campos requeridos en los datos personales.');
        }
    }
    map(row) {
        const campoToKey = {
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
        const result = {};
        for (const item of row) {
            const key = campoToKey[item.Campo];
            if (key) {
                result[key] = item.Valor;
            }
        }
        return result;
    }
    toClassInstance(row, clazz) {
        const instance = new clazz();
        Object.assign(instance, row);
        return instance;
    }
    async obtenerDatosPersonales() {
        return this.getEntity();
    }
}
exports.DatosPersonalesRepositoryImpl = DatosPersonalesRepositoryImpl;
//# sourceMappingURL=DatosPersonalesRepositoryImpl.js.map