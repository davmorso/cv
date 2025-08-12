"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdiomaController = void 0;
const IdiomaRepositoryImpl_1 = require("../../persistence/Impl/IdiomaRepositoryImpl");
const InternalServerError_1 = require("../../../shared/errors/InternalServerError");
const IdiomaServices_1 = require("../../../domain/services/IdiomaServices");
const repo = new IdiomaRepositoryImpl_1.IdiomaRepositoryImpl('ruta/al/archivo.xlsx');
const service = new IdiomaServices_1.IdiomaService(repo);
class IdiomaController {
    static async listarIdiomas(req, res) {
        try {
            const datos = await service.listarIdiomas();
            res.json(datos);
        }
        catch (ex) {
            if (ex instanceof Error) {
                throw new InternalServerError_1.InternalServerError(ex.message);
            }
            else {
                throw new InternalServerError_1.InternalServerError('Unknown error');
            }
        }
    }
}
exports.IdiomaController = IdiomaController;
//# sourceMappingURL=IdiomaController.js.map