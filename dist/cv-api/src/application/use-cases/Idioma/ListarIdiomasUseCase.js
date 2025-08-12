"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarIdiomasUseCase = void 0;
class ListarIdiomasUseCase {
    idiomaRepository;
    constructor(idiomaRepository) {
        this.idiomaRepository = idiomaRepository;
    }
    async execute() {
        return this.idiomaRepository.listarIdiomas();
    }
}
exports.ListarIdiomasUseCase = ListarIdiomasUseCase;
//# sourceMappingURL=ListarIdiomasUseCase.js.map