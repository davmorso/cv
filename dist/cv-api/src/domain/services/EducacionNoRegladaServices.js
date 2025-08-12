"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducacionNoRegladaService = void 0;
class EducacionNoRegladaService {
    educacionNoRegladaRepository;
    constructor(educacionNoRegladaRepository) {
        this.educacionNoRegladaRepository = educacionNoRegladaRepository;
    }
    async listarEducacionNoReglada() {
        return this.educacionNoRegladaRepository.listarEducacionNoReglada();
    }
}
exports.EducacionNoRegladaService = EducacionNoRegladaService;
//# sourceMappingURL=EducacionNoRegladaServices.js.map