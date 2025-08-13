"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumenConocimientoController = void 0;
const ResumenConocimientoRepositoryImpl_1 = require("../../persistence/Impl/ResumenConocimientoRepositoryImpl");
const ResumenConocimientoServices_1 = require("../../../domain/services/ResumenConocimientoServices");
const InternalServerError_1 = require("../../../shared/errors/InternalServerError");
const path_1 = __importDefault(require("path"));
const environment_1 = require("../../../config/environment");
const excelPath = path_1.default.resolve(process.cwd(), environment_1.environment.excelFilePath);
const repo = new ResumenConocimientoRepositoryImpl_1.ResumenConocimientoRepositoryImpl(excelPath);
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