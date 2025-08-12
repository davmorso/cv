"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienciaService = void 0;
class ExperienciaService {
    experienciaRepository;
    constructor(experienciaRepository) {
        this.experienciaRepository = experienciaRepository;
    }
    async listarExperiencia() {
        return this.experienciaRepository.listarExperiencia();
    }
}
exports.ExperienciaService = ExperienciaService;
//# sourceMappingURL=ExperienciaRepositoryServices.js.map