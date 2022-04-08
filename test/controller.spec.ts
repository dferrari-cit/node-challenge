import { Service } from "../src/service/service";
import {listGitHub} from "../src/controllers/mocks";
import { AppError } from "../src/errors/AppError";
import axios from "axios";

describe("Validação das chamadas da api", () => {
    let service = new Service;
    jest.setTimeout(20000);
    it("Component service deve ser criado", () => {
        expect(service).toBeTruthy();
    })

    it('Retorno do json se encontrar um usuario', async () => {
        let res = await service.execute("antoni0o");
        expect(res).toEqual(listGitHub);
        
    });

    it("Não deveria retornar usuário", async () => {
        try {
            let res = await service.execute("naoepossiveltcsdfsdfsd");
        } catch (error) {
            expect(error.message).toBe("User Not Found");
        }
    });

    it("Retorno do json se encontrar um usuario | AXIOS", async () => {
        let res = await axios.get(`http://localhost:4000/searchProfile/antoni0o`);
        expect(res.data).toEqual(listGitHub);
    });

    it("Não deveria retornar usário | AXIOS", async () => {
        try{
        let res = await axios.get(`http://localhost:4000/searchProfile/naoepossiveltcsdfsdfsd`);}
        catch(error){
            expect(error.message).toBe("Request failed with status code 404");
        }
    })

})