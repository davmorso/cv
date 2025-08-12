export declare abstract class ExcelRepositoryBase<T> {
    private filePath;
    private sheetName;
    protected abstract sheetIndex: number;
    protected abstract validate(row: any): void;
    protected abstract map(row: any): T;
    constructor(filePath: string, sheetName: string);
    protected getRow(): any[];
    getEntity(): T;
    getEntities(): T[];
}
