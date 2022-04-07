import { Service } from "../src/service/service";
import {listGitHub} from "../src/controllers/mocks"
describe("Acessa a API", () => {
    let service = new Service;
    it("Component controller deve ser criado", () => {
        expect(service).toBeTruthy();
    })

    it('responds with json', async () => {
        let res = await service.execute("antoni0o");
        // var res = await axios.get(`http://localhost:4000/searchProfile/antoni0o`)
        expect(res).toEqual(listGitHub)
        
    });

    // it("não deveria retornar usuário", () => {

    // })

})