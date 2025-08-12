"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarEducacionNoRegladaUseCase = void 0;
class ListarEducacionNoRegladaUseCase {
    educacionNoRegladaRepository;
    constructor(educacionNoRegladaRepository) {
        this.educacionNoRegladaRepository = educacionNoRegladaRepository;
    }
    async execute() {
        return this.educacionNoRegladaRepository.listarEducacionNoReglada();
    }
}
exports.ListarEducacionNoRegladaUseCase = ListarEducacionNoRegladaUseCase;
//# sourceMappingURL=ListarEducacionNoRegladaUseCase.js.map