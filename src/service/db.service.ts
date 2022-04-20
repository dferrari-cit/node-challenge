import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Registry, RegistryDocument } from "../model/registry.model";


@Injectable()
export class DBService {
    constructor(@InjectModel('Registry') private readonly registryModel: Model<RegistryDocument>) { }

    async getAll() {
        return this.registryModel.find().exec();
    }

    async getByName(name: string) {
        return this.registryModel.find({ searchedName: name }).exec();

    }

    async getByDate(data: string) {
        return this.registryModel.find({ searchedDate: {$regex: data} }).exec();

    }

    async create(registry: Registry) {
        const createdRegistry = new this.registryModel(registry);
        return createdRegistry.save();
    }
}

