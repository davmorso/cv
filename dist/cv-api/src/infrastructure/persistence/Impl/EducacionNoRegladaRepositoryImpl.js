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
        let data = this.map(row);
        if (!data.curso || !data.plataforma || !data.anyo) {
            throw new Error('Faltan campos requeridos en educación no reglada.');
        }
    }
    map(row) {
        return {
            anyo: row["Año"],
            curso: row["Curso / Certificación"],
            plataforma: row["Entidad / Plataforma"],
            detalle: row["Horas / Detalles"]
        };
    }
    async listarEducacionNoReglada() {
        return this.getEntities();
    }
}
exports.EducacionNoRegladaRepositoryImpl = EducacionNoRegladaRepositoryImpl;
//# sourceMappingURL=EducacionNoRegladaRepositoryImpl.js.map