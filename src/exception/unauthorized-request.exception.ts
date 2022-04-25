import { HttpException, HttpStatus } from "@nestjs/common";

export class UnauthorizedRequest extends HttpException{
    constructor(response: string){
        super(response, HttpStatus.FORBIDDEN);
    }
}