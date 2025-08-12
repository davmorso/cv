"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdiomaService = void 0;
class IdiomaService {
    idiomaRepository;
    constructor(idiomaRepository) {
        this.idiomaRepository = idiomaRepository;
    }
    async listarIdiomas() {
        return this.idiomaRepository.listarIdiomas();
    }
}
exports.IdiomaService = IdiomaService;
//# sourceMappingURL=IdiomaServices.js.map