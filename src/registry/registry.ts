import { Document } from "mongoose";

export class Registry extends Document{
    avatar: string;
    name: string;
    bio: string;
    urlUser: string;
    starredList: Array<any>;
    data: Date;
}