"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdiomaController = void 0;
const IdiomaRepositoryImpl_1 = require("../../persistence/Impl/IdiomaRepositoryImpl");
const InternalServerError_1 = require("../../../shared/errors/InternalServerError");
const IdiomaServices_1 = require("../../../domain/services/IdiomaServices");
const path_1 = __importDefault(require("path"));
const environment_1 = require("../../../config/environment");
const excelPath = path_1.default.resolve(process.cwd(), environment_1.environment.excelFilePath);
const repo = new IdiomaRepositoryImpl_1.IdiomaRepositoryImpl(excelPath);
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