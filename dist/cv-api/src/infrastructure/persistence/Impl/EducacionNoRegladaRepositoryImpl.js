"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducacionNoRegladaRepositoryImpl = void 0;
const ExcelRepositoryBase_1 = require("../ExcelRepositoryBase");
class EducacionNoRegladaRepositoryImpl extends ExcelRepositoryBase_1.ExcelRepositoryBase {
    sheetIndex = 2;
    constructor(filePath) {
        super(filePath, 'EDUCACION NO REGLADA');
    }
    validate(row) {
        if (!row.institucion || !row.titulo) {
            throw new Error('Faltan campos requeridos en educación no reglada.');
        }
    }
    map(row) {
        return {
            anyo: row["Año"],
            curso: row["Curso"],
            plataforma: row["Plataforma"],
            detalle: row["Detalle"],
        };
    }
    async listarEducacionNoReglada() {
        return this.getEntities();
    }
}
exports.EducacionNoRegladaRepositoryImpl = EducacionNoRegladaRepositoryImpl;
//# sourceMappingURL=EducacionNoRegladaRepositoryImpl.js.map