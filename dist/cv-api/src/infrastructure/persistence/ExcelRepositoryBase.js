"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelRepositoryBase = void 0;
const XLSX = __importStar(require("xlsx"));
const fs = __importStar(require("fs"));
class ExcelRepositoryBase {
    filePath;
    sheetName;
    constructor(filePath, sheetName) {
        this.filePath = filePath;
        this.sheetName = sheetName;
    }
    getRow() {
        console.log('process.cwd():', process.cwd());
        console.log('__dirname:', __dirname);
        if (!fs.existsSync(this.filePath)) {
            throw new Error(`El archivo Excel no existe en la ruta: ${this.filePath}`);
        }
        const workbook = XLSX.readFile(this.filePath);
        let worksheet;
        if (this.sheetName) {
            worksheet = workbook.Sheets[this.sheetName];
        }
        else if (typeof this.sheetIndex === 'number') {
            const sheetNames = workbook.SheetNames;
            worksheet = workbook.Sheets[sheetNames[this.sheetIndex]];
        }
        if (!worksheet) {
            throw new Error(`No se encontró la hoja de Excel especificada.`);
        }
        return XLSX.utils.sheet_to_json(worksheet, { defval: '' });
    }
    getEntity() {
        const rows = this.getRow();
        if (rows.length === 0)
            throw new Error('No hay datos en la hoja.');
        this.validate(rows[0]);
        return this.map(rows[0]);
    }
    getEntities() {
        const rows = this.getRow();
        return rows.map(row => {
            this.validate(row);
            return this.map(row);
        });
    }
}
exports.ExcelRepositoryBase = ExcelRepositoryBase;
//# sourceMappingURL=ExcelRepositoryBase.js.map