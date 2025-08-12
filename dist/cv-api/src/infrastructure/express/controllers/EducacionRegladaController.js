"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducacionRegladaController = void 0;
const EducacionRegladaRepositoryImpl_1 = require("../../persistence/Impl/EducacionRegladaRepositoryImpl");
const InternalServerError_1 = require("../../../shared/errors/InternalServerError");
const EducacionRegladaServices_1 = require("../../../domain/services/EducacionRegladaServices");
const repo = new EducacionRegladaRepositoryImpl_1.EducacionRegladaRepositoryImpl('ruta/al/archivo.xlsx');
const service = new EducacionRegladaServices_1.EducacionRegladaService(repo);
class EducacionRegladaController {
    static async listarEducacionReglada(req, res) {
        try {
            const datos = await service.listarEducacionReglada();
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
exports.EducacionRegladaController = EducacionRegladaController;
//# sourceMappingURL=EducacionRegladaController.js.map