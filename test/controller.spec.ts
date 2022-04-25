import { Service } from "../src/service/service";
import { listGitHub } from "../src/controllers/mocks";
import { AppError } from "../src/errors/AppError";

describe("Validação das chamadas da api", () => {
    let service = new Service();
    jest.setTimeout(20000);

    it("Component service deve ser criado", () => {
        expect(service).toBeTruthy();
    })

    it('Retorno do json se encontrar um usuario', async () => {
        
    jest.spyOn(service, "execute").mockImplementation(()=>{
        return listGitHub
    })
        let res = await service.execute("antoni0o");
        expect(res).toEqual(listGitHub);   
    });

    it("Não deveria retornar usuário", async () => {
        try {
            jest.spyOn(service, "execute").mockImplementation(()=>{
                throw new AppError("User Not Found", 404)
            })
            let res = service.execute("antoni0o")
        } catch (error) {
            expect(error).toEqual(new AppError("User Not Found", 404));
        }
    });
})