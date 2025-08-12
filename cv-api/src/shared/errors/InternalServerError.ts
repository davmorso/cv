export class InternalServerError extends Error {
    public status: number;

    constructor(message: string = 'Internal Server Error') {
        super(message);
        this.name = 'InternalServerError';
        this.status = 500;
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}