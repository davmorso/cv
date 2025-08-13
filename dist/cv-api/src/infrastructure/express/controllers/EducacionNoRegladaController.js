"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducacionNoRegladaController = void 0;
const EducacionNoRegladaRepositoryImpl_1 = require("../../persistence/Impl/EducacionNoRegladaRepositoryImpl");
const InternalServerError_1 = require("../../../shared/errors/InternalServerError");
const EducacionNoRegladaServices_1 = require("../../../domain/services/EducacionNoRegladaServices");
const path_1 = __importDefault(require("path"));
const environment_1 = require("../../../config/environment");
const excelPath = path_1.default.resolve(process.cwd(), environment_1.environment.excelFilePath);
const repo = new EducacionNoRegladaRepositoryImpl_1.EducacionNoRegladaRepositoryImpl(excelPath);
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