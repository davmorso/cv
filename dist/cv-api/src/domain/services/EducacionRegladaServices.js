"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducacionRegladaService = void 0;
class EducacionRegladaService {
    educacionRegladaRepository;
    constructor(educacionRegladaRepository) {
        this.educacionRegladaRepository = educacionRegladaRepository;
    }
    async listarEducacionReglada() {
        return this.educacionRegladaRepository.listarEducacionReglada();
    }
}
exports.EducacionRegladaService = EducacionRegladaService;
//# sourceMappingURL=EducacionRegladaServices.js.map