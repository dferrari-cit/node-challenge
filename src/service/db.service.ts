import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Console } from "console";
import { Model } from "mongoose";
import { Registry } from "src/registry/registry";

@Injectable()
export class DBService {
    constructor(@InjectModel('Registry') private readonly registryModel: Model<Registry>) { }

    async getAll() {
        const dataAtual = new Date();
        console.log(dataAtual.toUTCString())
        console.log(dataAtual.toString().slice(0, 21).replace(/ /g, '-'))
        //console.log(dataAtual.toDateString())
        return this.registryModel.find().exec();
    }

    async getByName(userName: string) {
        return this.registryModel.find({ name: userName }).exec();

    }

    async getByDate(date: Date) {
        return this.registryModel.find({ data: date }).exec();
        //return this.registryModel.find({ data: { $gte: new Date(2022, 4, 17), $lt: new Date(2022, 4, 20)}}).exec();
        //return this.registryModel.find({ data: { $lte: new Date(2022, 4, 20) } }).exec();

    }

    async create(registry: Registry) {
        const createdRegistry = new this.registryModel(registry);
        return createdRegistry.save();
    }

    delete(id: string) {
        return this.registryModel.deleteOne({ _id: id }).exec();
    }
}

