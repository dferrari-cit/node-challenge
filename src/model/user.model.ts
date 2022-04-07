import { StarredModel } from './starred.model';
export class UserModel{
    avatar: string;
    name: string;
    bio: string;
    urlUser: string;
    starredList: Array <StarredModel> | [];

    constructor(avatar: string, name: string, bio: string, urlUser: string, starredList: Array<StarredModel>){
        this.avatar = avatar;
        this.name = name;
        this.bio = bio;
        this.urlUser = urlUser;
        this.starredList = starredList;
    }
}