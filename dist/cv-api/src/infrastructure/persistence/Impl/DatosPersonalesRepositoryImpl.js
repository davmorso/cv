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
        if (!row.nombre_completo || !row.email) {
            throw new Error('Faltan campos requeridos en los datos personales.');
        }
    }
    map(row) {
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
    async obtenerDatosPersonales() {
        return this.getEntity();
    }
}
exports.DatosPersonalesRepositoryImpl = DatosPersonalesRepositoryImpl;
//# sourceMappingURL=DatosPersonalesRepositoryImpl.js.map