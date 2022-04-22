import { HttpException, HttpStatus } from "@nestjs/common";

export class UserNotFound extends HttpException{
    constructor(response: string){
        super(response, HttpStatus.NOT_FOUND);
    }
}