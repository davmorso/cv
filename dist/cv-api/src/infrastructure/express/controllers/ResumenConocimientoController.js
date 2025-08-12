"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumenConocimientoController = void 0;
const ResumenConocimientoRepositoryImpl_1 = require("../../persistence/Impl/ResumenConocimientoRepositoryImpl");
const InternalServerError_1 = require("../../../shared/errors/InternalServerError");
const ResumenConocimientoServices_1 = require("../../../domain/services/ResumenConocimientoServices");
const repo = new ResumenConocimientoRepositoryImpl_1.ResumenConocimientoRepositoryImpl('ruta/al/archivo.xlsx');
const service = new ResumenConocimientoServices_1.ResumenConocimientoService(repo);
class ResumenConocimientoController {
    static async listarResumenConocimiento(req, res) {
        try {
            const datos = await service.listarResumenConocimiento();
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
exports.ResumenConocimientoController = ResumenConocimientoController;
//# sourceMappingURL=ResumenConocimientoController.js.map