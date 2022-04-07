import { Service } from "../src/service/service";
import {listGitHub} from "../src/controllers/mocks";
describe("Acessa a API", () => {
    let service = new Service;
    it("Component service deve ser criado", () => {
        expect(service).toBeTruthy();
    })

    it('Retorno do json se encontrar um usuario', async () => {
        let res = await service.execute("antoni0o");
        expect(res).toEqual(listGitHub)
        
    });

    it("não deveria retornar usuário", async () => {
        let res = await service.execute("naoepossiveltcsdfsdfsd");
        expect(res).toEqual({"message":"User Not Found"});
    })

})