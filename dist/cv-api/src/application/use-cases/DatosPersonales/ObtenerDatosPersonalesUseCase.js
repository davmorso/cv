"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerDatosPersonalesUseCase = void 0;
class ObtenerDatosPersonalesUseCase {
    datosPersonalesRepository;
    constructor(datosPersonalesRepository) {
        this.datosPersonalesRepository = datosPersonalesRepository;
    }
    async execute() {
        return this.datosPersonalesRepository.obtenerDatosPersonales();
    }
}
exports.ObtenerDatosPersonalesUseCase = ObtenerDatosPersonalesUseCase;
//# sourceMappingURL=ObtenerDatosPersonalesUseCase.js.map