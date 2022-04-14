interface GitModel {
    name: string;
    avatar_url: string;
    bio: string;
    html_url: string;
    fav_repositories: GitRepository[]
}

interface GitRepository {
    name: string,
    description: string,
    private: boolean,
    full_name: string;
}

export { GitModel, GitRepository }
