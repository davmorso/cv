"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducacionRegladaController = void 0;
const EducacionRegladaRepositoryImpl_1 = require("../../persistence/Impl/EducacionRegladaRepositoryImpl");
const InternalServerError_1 = require("../../../shared/errors/InternalServerError");
const EducacionRegladaServices_1 = require("../../../domain/services/EducacionRegladaServices");
const path_1 = __importDefault(require("path"));
const environment_1 = require("../../../config/environment");
const excelPath = path_1.default.resolve(process.cwd(), environment_1.environment.excelFilePath);
const repo = new EducacionRegladaRepositoryImpl_1.EducacionRegladaRepositoryImpl(excelPath);
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