"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienciaController = void 0;
const ExperienciaRepositoryImpl_1 = require("../../persistence/Impl/ExperienciaRepositoryImpl");
const InternalServerError_1 = require("../../../shared/errors/InternalServerError");
const ExperienciaRepositoryServices_1 = require("../../../domain/services/ExperienciaRepositoryServices");
const repo = new ExperienciaRepositoryImpl_1.ExperienciaRepositoryImpl('ruta/al/archivo.xlsx');
const service = new ExperienciaRepositoryServices_1.ExperienciaService(repo);
class ExperienciaController {
    static async listarExperiencia(req, res) {
        try {
            const datos = await service.listarExperiencia();
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
exports.ExperienciaController = ExperienciaController;
//# sourceMappingURL=ExperienciaController.js.map