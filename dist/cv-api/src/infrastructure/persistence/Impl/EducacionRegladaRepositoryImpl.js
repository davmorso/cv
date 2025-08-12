"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducacionRegladaRepositoryImpl = void 0;
const ExcelRepositoryBase_1 = require("../ExcelRepositoryBase");
class EducacionRegladaRepositoryImpl extends ExcelRepositoryBase_1.ExcelRepositoryBase {
    sheetIndex = 1;
    constructor(filePath) {
        super(filePath, 'EDUCACION REGLADA');
    }
    validate(row) {
        if (!row.institucion || !row.titulo) {
            throw new Error('Faltan campos requeridos en educación reglada.');
        }
    }
    map(row) {
        return {
            anyo: row["Año"],
            formacion: row["Formación"],
            centro: row["Centro"],
            observaciones: row["Observaciones"]
        };
    }
    async listarEducacionReglada() {
        return this.getEntities();
    }
}
exports.EducacionRegladaRepositoryImpl = EducacionRegladaRepositoryImpl;
//# sourceMappingURL=EducacionRegladaRepositoryImpl.js.map