import { Controller } from "./controller";
import { Request, Response } from 'express';

describe("Acessa a API", () => {
    let controller: Controller;

    it("Component controller deve ser criado", () =>{
        expect(controller).toBeTruthy;
    })

    it("deveria retornar dados do usuário", async () => {
        var req: Request;
        var res: Response;
        req.params.q = "antoni0o";
        var result = controller.handle(req,res);
        expect(result).toEqual("")
        console.log(result);
    })



    it("não deveria retornar usuário", () => {

    })

})