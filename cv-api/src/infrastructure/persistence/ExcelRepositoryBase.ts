import * as XLSX from 'xlsx';
import * as fs from 'fs';

export abstract class ExcelRepositoryBase<T> {
    private filePath: string;
    private sheetName: string;
    protected abstract sheetIndex: number;
    protected abstract validate(row: any): void;
    protected abstract map(row: any): T;

    constructor(filePath: string, sheetName: string) {
        this.filePath = filePath;
        this.sheetName = sheetName;
    }

    protected getRow(): any[] {
        console.log('process.cwd():', process.cwd());
        console.log('__dirname:', __dirname);
        
        if (!fs.existsSync(this.filePath)) {
            throw new Error(`El archivo Excel no existe en la ruta: ${this.filePath}`);
        }
        const workbook = XLSX.readFile(this.filePath);
        let worksheet;
        if (this.sheetName) {
            worksheet = workbook.Sheets[this.sheetName];
        } else if (typeof this.sheetIndex === 'number') {
            const sheetNames = workbook.SheetNames;
            worksheet = workbook.Sheets[sheetNames[this.sheetIndex]];
        }
        if (!worksheet) {
            throw new Error(`No se encontró la hoja de Excel especificada.`);
        }
        return XLSX.utils.sheet_to_json(worksheet, { defval: '' });
    }

    getEntity(): T {
        const rows = this.getRow();
        if (rows.length === 0) throw new Error('No hay datos en la hoja.');
        this.validate(rows);
        return this.map(rows);
    }

    getEntities(): T[] {
        const rows = this.getRow();
        return rows.map(row => {
            this.validate(row);
            return this.map(row);
        });
    }
}