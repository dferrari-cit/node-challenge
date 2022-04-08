export class UserNotFound {
    readonly message: string;
    readonly status: number;

    constructor(message: string, statusCode: number) {
      this.message = message;
      this.status = statusCode;
    }
  
}