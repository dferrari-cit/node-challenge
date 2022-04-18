import { Request, Response } from 'express';
import { Service } from '../service/service';


class Controller {
    async handle(req: Request, res: Response): Promise<Response> {
        const service = new Service();

        const { name } = req.params;

        const user = await service.execute(name);
        return res.status(200).json(user);
    }
}

export { Controller };