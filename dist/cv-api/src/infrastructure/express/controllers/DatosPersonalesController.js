"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosPersonalesController = void 0;
const DatosPersonalesRepositoryImpl_1 = require("../../persistence/Impl/DatosPersonalesRepositoryImpl");
const DatosPersonalesServices_1 = require("../../../domain/services/DatosPersonalesServices");
const InternalServerError_1 = require("../../../shared/errors/InternalServerError");
const path_1 = __importDefault(require("path"));
const environment_1 = require("../../../config/environment");
const excelPath = path_1.default.resolve(process.cwd(), environment_1.environment.excelFilePath);
const repo = new DatosPersonalesRepositoryImpl_1.DatosPersonalesRepositoryImpl(excelPath);
const service = new DatosPersonalesServices_1.DatosPersonalesService(repo);
class DatosPersonalesController {
    static async obtenerDatosPersonales(req, res) {
        try {
            const datos = await service.obtenerDatosPersonales();
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
exports.DatosPersonalesController = DatosPersonalesController;
//# sourceMappingURL=DatosPersonalesController.js.map