import { ApiProperty } from '@nestjs/swagger';
import { StarredModel } from './starred.model';
export class UserModel {
    @ApiProperty({
        description: 'URL for avatar image of user',
        example: 'https://avatars.githubusercontent.com/u/000000?v=0'
    })
    avatar: string;

    @ApiProperty({
        description: 'Name of user',
        example: 'Fulano de Tal'
    })
    name: string;

    @ApiProperty({
        description: 'Bio of user',
        example: 'I love patato'
    })
    bio: string;

    @ApiProperty({
        description: 'URL for user profile',
        example: 'https://api.github.com/users/fulano00876'
    })
    urlUser: string;

    @ApiProperty({
        description: 'List until five most starred user repositories',
        type: StarredModel, isArray: true
    })
    starredList: Array<StarredModel> | [];

    constructor(avatar: string, name: string, bio: string, urlUser: string, starredList: Array<StarredModel>) {
        this.avatar = avatar;
        this.name = name;
        this.bio = bio;
        this.urlUser = urlUser;
        this.starredList = starredList;
    }
}