import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Users, UsersDocument } from "./lodal-db.schema";
import { Model, FilterQuery } from "mongoose";

@Injectable()
export class UsersRepository{
    constructor(@InjectModel(Users.name) private userModel: Model<UsersDocument>){}

    async create(user: Users): Promise<Users>{
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    async findOne(userFilterQuery: FilterQuery<Users>): Promise<Users>{
        return this.userModel.findOne(userFilterQuery);
    }

    async find(userFilterQuery: FilterQuery<Users>): Promise<Users[]>{
        return this.userModel.find(userFilterQuery);
    }

    async findAll(): Promise<Users[]>{
        return this.userModel.find().exec();
    }
}