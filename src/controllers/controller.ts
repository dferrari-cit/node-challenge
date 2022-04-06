import axios from 'axios';
import { Request, Response } from 'express';

import { gitModel, gitRepository } from '../models/gitModel';

class Controller {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.params;

        const userResponse = await axios.get(`https://api.github.com/users/${name}`);
        let favRepositories: gitRepository[] = [];

        for(let i = 1; favRepositories.length < 5; i++) {
            let favResponse = await axios.get(`https://api.github.com/users/${name}/starred?page=${i}&per_page=1`);

            let favRepository: gitRepository = {
                Nome: favResponse.data[0].name,
                Descricao: favResponse.data[0].description,
                Indicativo: favResponse.data[0].private,
                EnderecoPerfil: favResponse.data[0].full_name
            }

            favRepositories.push(favRepository);
        };

        
        const user: gitModel = {
            Nome: userResponse.data.login,
            Avatar: userResponse.data.avatar_url,
            Biografia: userResponse.data.bio,
            EnderecoPerfil: userResponse.data.html_url,
            RepostoriosFavoritos: favRepositories
        };

        return res.status(200).json(user);
    }
}

export { Controller };