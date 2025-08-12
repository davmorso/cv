"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumenConocimientoService = void 0;
class ResumenConocimientoService {
    resumenConocimientoRepository;
    constructor(resumenConocimientoRepository) {
        this.resumenConocimientoRepository = resumenConocimientoRepository;
    }
    async listarResumenConocimiento() {
        return this.resumenConocimientoRepository.listarResumenConocimiento();
    }
}
exports.ResumenConocimientoService = ResumenConocimientoService;
//# sourceMappingURL=ResumenConocimientoServices.js.map