export class UserDto{
    avatar_url: string;
    url: string;
    starred_url: string;
    name: string;
    bio: string;

    constructor(avatar_url: string,
        url: string,
        starred_url: string,
        name: string,
        bio: string){
            this.avatar_url = avatar_url ;
            this.url = url;
            this.starred_url = starred_url;
            this.name = name;
            this.bio = bio;
        }
}