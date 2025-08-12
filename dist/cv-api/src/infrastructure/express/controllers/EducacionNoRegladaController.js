"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducacionNoRegladaController = void 0;
const EducacionNoRegladaRepositoryImpl_1 = require("../../persistence/Impl/EducacionNoRegladaRepositoryImpl");
const InternalServerError_1 = require("../../../shared/errors/InternalServerError");
const EducacionNoRegladaServices_1 = require("../../../domain/services/EducacionNoRegladaServices");
const repo = new EducacionNoRegladaRepositoryImpl_1.EducacionNoRegladaRepositoryImpl('ruta/al/archivo.xlsx');
const service = new EducacionNoRegladaServices_1.EducacionNoRegladaService(repo);
class EducacionNoRegladaController {
    static async listarEducacionNoReglada(req, res) {
        try {
            const datos = await service.listarEducacionNoReglada();
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
exports.EducacionNoRegladaController = EducacionNoRegladaController;
//# sourceMappingURL=EducacionNoRegladaController.js.map