import { Request, Response } from 'express';
import { GetAllStoredUsersService } from '../service/getAllStoredDataService';


class GetUsersController {

    async handle(_req: Request, res: Response): Promise<Response> {

        const service = new GetAllStoredUsersService();
        const data = await service.execute();
        return res.status(200).json(data)
    }
}

export { GetUsersController };