import axios from "axios";
import { gitModel, gitRepository } from '../models/gitModel';

class Service {
    async execute(name: string) {
        const userResponse = await axios.get(`https://api.github.com/users/${name}`);
        let favRepositories: gitRepository[] = [];

        let favResponse = await axios.get(`https://api.github.com/users/${name}/starred?page=1&per_page=5`);

        favResponse.data.map((repository: gitRepository) => {
            favRepositories.push(repository);
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
            Nome: userResponse.data.login,
            Avatar: userResponse.data.avatar_url,
            Biografia: userResponse.data.bio,
            EnderecoPerfil: userResponse.data.html_url,
            RepostoriosFavoritos: favRepositories
        };

        return user;
    }
}

export { Service };