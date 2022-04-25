import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsersDocument = Users & Document;

@Schema()
export class Users{
    @Prop()
    avatar: string;
    @Prop()
    name: string;
    @Prop()
    bio: string;
    @Prop()
    urlUser: string;
    @Prop()
    starredList: Array<any>;
}

export const UserSchema = SchemaFactory.createForClass(Users);