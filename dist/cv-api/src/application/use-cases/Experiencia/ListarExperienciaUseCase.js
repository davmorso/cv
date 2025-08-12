"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarExperienciaUseCase = void 0;
class ListarExperienciaUseCase {
    experienciaRepository;
    constructor(experienciaRepository) {
        this.experienciaRepository = experienciaRepository;
    }
    async execute() {
        return this.experienciaRepository.listarExperiencia();
    }
}
exports.ListarExperienciaUseCase = ListarExperienciaUseCase;
//# sourceMappingURL=ListarExperienciaUseCase.js.map