"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosPersonalesService = void 0;
class DatosPersonalesService {
    datosPersonalesRepository;
    constructor(datosPersonalesRepository) {
        this.datosPersonalesRepository = datosPersonalesRepository;
    }
    async obtenerDatosPersonales() {
        return this.datosPersonalesRepository.obtenerDatosPersonales();
    }
}
exports.DatosPersonalesService = DatosPersonalesService;
//# sourceMappingURL=DatosPersonalesServices.js.map