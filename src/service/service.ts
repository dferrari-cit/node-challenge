import axios from "axios";
import { gitModel, gitRepository } from '../models/gitModel';

import { AppError } from "../errors/AppError"

class Service {
    async execute(name: string) {
        const userResponse = await axios.get(`https://api.github.com/users/${name}`)
                                    .catch((err) => {
                                        throw new AppError(`User ${err.response.statusText}`, err.response.status);
                                    });
        
        let favRepositories: gitRepository[] = [];

        let favResponse = await axios.get(`https://api.github.com/users/${name}/starred?page=1&per_page=5`);

        favResponse.data.map((repository: gitRepository) => {
            let favRepository: gitRepository = {
                name: repository.name,
                description: repository.description,
                private: repository.private,
                full_name: repository.full_name
            }

            favRepositories.push(favRepository);
        })

        // for(let i = 1; i <= 5; i++) {
        //     let favResponse = await axios.get(`https://api.github.com/users/${name}/starred?page=${i}&per_page=1`);

        //     let favRepository: gitRepository = {
        //         Nome: favResponse.data[0].name,
        //         Descricao: favResponse.data[0].description,
        //         Indicativo: favResponse.data[0].private,
        //         EnderecoPerfil: favResponse.data[0].full_name
        //     }

        //     favRepositories.push(favRepository);
        // };

        
        const user: gitModel = {
            name: userResponse.data.login,
            avatar_url: userResponse.data.avatar_url,
            bio: userResponse.data.bio,
            html_url: userResponse.data.html_url,
            fav_repositories: favRepositories
        };

        return user;
    }
}

export { Service };