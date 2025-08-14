"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarResumenConocimientoUseCase = void 0;
class ListarResumenConocimientoUseCase {
    resumenConocimientoRepository;
    constructor(resumenConocimientoRepository) {
        this.resumenConocimientoRepository = resumenConocimientoRepository;
    }
    async execute() {
        return this.resumenConocimientoRepository.listarResumenConocimiento();
    }
}
exports.ListarResumenConocimientoUseCase = ListarResumenConocimientoUseCase;
//# sourceMappingURL=ListarResumenConocimientoUseCase.js.map