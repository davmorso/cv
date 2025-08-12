"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarEducacionRegladaUseCase = void 0;
class ListarEducacionRegladaUseCase {
    educacionRegladaRepository;
    constructor(educacionRegladaRepository) {
        this.educacionRegladaRepository = educacionRegladaRepository;
    }
    async execute() {
        return this.educacionRegladaRepository.listarEducacionReglada();
    }
}
exports.ListarEducacionRegladaUseCase = ListarEducacionRegladaUseCase;
//# sourceMappingURL=ListarEducacionRegladaUseCase.js.map