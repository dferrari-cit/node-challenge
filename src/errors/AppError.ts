export class AppError {
    readonly message: string;

    readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        this.message = message;
        this.statusCode = statusCode;
    }
}