import axios from 'axios';
import { Request, Response } from 'express';
import { Service } from '../service/service';

import { gitModel, gitRepository } from '../models/gitModel';

class Controller {
    async handle(req: Request, res: Response): Promise<Response> {
        const service = new Service();

        const { name } = req.params;
        
        const user = await service.execute(name);

        if(!user) {
            return res.status(404).json({ message: "Usuário não encontrado!" })
        }

        return res.status(200).json(user);
    }
}

export { Controller };