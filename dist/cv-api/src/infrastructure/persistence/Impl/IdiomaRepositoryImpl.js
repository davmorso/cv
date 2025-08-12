"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdiomaRepositoryImpl = void 0;
const ExcelRepositoryBase_1 = require("../ExcelRepositoryBase");
class IdiomaRepositoryImpl extends ExcelRepositoryBase_1.ExcelRepositoryBase {
    sheetIndex = 3;
    constructor(filePath) {
        super(filePath, 'IDIOMAS');
    }
    validate(row) {
        if (!row.idioma || !row.nivel) {
            throw new Error('Faltan campos requeridos en idiomas.');
        }
    }
    map(row) {
        return {
            idioma: row.idioma,
            nivel: row.nivel,
            observaciones: row.observaciones
        };
    }
    async listarIdiomas() {
        return this.getEntities();
    }
}
exports.IdiomaRepositoryImpl = IdiomaRepositoryImpl;
//# sourceMappingURL=IdiomaRepositoryImpl.js.map