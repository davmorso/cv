"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumenConocimientoRepositoryImpl = void 0;
const ExcelRepositoryBase_1 = require("../../../../infrastructure/persistence/ExcelRepositoryBase");
class ResumenConocimientoRepositoryImpl extends ExcelRepositoryBase_1.ExcelRepositoryBase {
    sheetIndex = 4;
    constructor(filePath) {
        super(filePath, 'RESUMEN CONOCIMIENTO');
    }
    validate(row) {
        if (!row.tecnologia || !row.nivel) {
            throw new Error('Faltan campos requeridos en resumen de conocimiento.');
        }
    }
    map(row) {
        return {
            tecnologia: row.tecnologia,
            anyos_experiencia: Number(row.anyos_experiencia),
            nivel: row.nivel,
            observaciones: row.observaciones
        };
    }
    async listarResumenConocimiento() {
        return this.getEntities();
    }
}
exports.ResumenConocimientoRepositoryImpl = ResumenConocimientoRepositoryImpl;
//# sourceMappingURL=ResumenConocimientoRepositoryImpl.js.map