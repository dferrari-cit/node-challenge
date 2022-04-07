interface gitModel {
    name: string;
    avatar_url: string;
    bio: string;
    html_url: string;
    fav_repositories: gitRepository[]
}

interface gitRepository {
    name: string,
    description: string,
    private: boolean,
    full_name: string;
}

export { gitModel, gitRepository }
