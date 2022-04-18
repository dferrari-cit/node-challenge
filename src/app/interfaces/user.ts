import { StarredList } from "./starred";

export interface User{
    avatar: string | null,
    name: string | null,
    bio: string | null,
    urlUser: string | null,
    starredList: StarredList[]
}