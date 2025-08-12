"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienciaRepositoryImpl = void 0;
const ExcelRepositoryBase_1 = require("../ExcelRepositoryBase");
class ExperienciaRepositoryImpl extends ExcelRepositoryBase_1.ExcelRepositoryBase {
    sheetIndex = 2;
    constructor(filePath) {
        super(filePath, 'EXPERIENCIA');
    }
    validate(row) {
        if (!row.empresa || !row.puesto) {
            throw new Error('Faltan campos requeridos en experiencia.');
        }
    }
    map(row) {
        return {
            fecha: row.Fecha,
            empresa: row.Empresa,
            cliente_1: row.Cliente_1,
            cliente_2: row.Cliente_2,
            puesto: row.Puesto,
            sector: row.Sector,
            descripcion: row.Descripcion,
            tecnologias: row.Tecnologias,
            observaciones: row.Observaciones
        };
    }
    async listarExperiencia() {
        return this.getEntities();
    }
}
exports.ExperienciaRepositoryImpl = ExperienciaRepositoryImpl;
//# sourceMappingURL=ExperienciaRepositoryImpl.js.map