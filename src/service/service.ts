import axios from "axios";
import { GitModel, GitRepository } from "../models/gitModel";

import { AppError } from "../errors/AppError";
import { User } from "../models/schemas";

class Service {
  async execute(name: string) {
    const userResponse = await axios.get(`https://api.github.com/users/${name}`)
      .catch((err) => {
        throw new AppError(
          `User ${err.response.statusText}`,
          err.response.status
        );
      });

<<<<<<< Updated upstream

    let favRepositories: GitRepository[] = [];
=======
    let favRepositories: gitRepository[] = [];
>>>>>>> Stashed changes

    let favResponse = await axios.get(
      `https://api.github.com/users/${name}/starred?page=1&per_page=5`
    );

    favResponse.data.map((repository: GitRepository) => {
      let favRepository: GitRepository = {
        name: repository.name,
        description: repository.description,
        private: repository.private,
        full_name: repository.full_name,
      };

      favRepositories.push(favRepository);
    });

<<<<<<< Updated upstream
    const user: GitModel = {
=======
    const githubUser: gitModel = {
>>>>>>> Stashed changes
      name: userResponse.data.login,
      avatar_url: userResponse.data.avatar_url,
      bio: userResponse.data.bio,
      html_url: userResponse.data.html_url,
      fav_repositories: favRepositories,
    };

    let user = new User({
      name: githubUser.name,
      avatar_url: githubUser.avatar_url,
      bio: githubUser.bio,
      html_url: githubUser.html_url,
      gitRepository: [
        ...favRepositories
      ]
    })

    user.save();

    return githubUser;
  }
}

export { Service };
