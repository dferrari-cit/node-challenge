import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RegistryDto } from "../adapter/registry.dto";
import { RegistryDtoMapper } from "../mapper/registry.dto.mapper";
import { Registry, RegistryDocument } from "../model/registry.model";


@Injectable()
export class DBService {
    constructor(
        private registyDtoMapper: RegistryDtoMapper,
        @InjectModel('Registry') private readonly registryModel: Model<RegistryDocument>
    ) { }

    async getAll(): Promise<Array<RegistryDto>> {
        const response = await this.registryModel.find().exec();
        return this.registyDtoMapper.responseToDto(response);
    }

    async getByName(name: string): Promise<Array<RegistryDto>> {
        const response = await this.registryModel.find({ searchedName: name }).exec();
        return this.registyDtoMapper.responseToDto(response);
    }

    async getByDate(data: string): Promise<Array<RegistryDto>> {
        const response = await this.registryModel.find({ searchedDate: { $regex: data } }).exec();
        return this.registyDtoMapper.responseToDto(response);
    }

    async create(registry: Registry) {
        const createdRegistry = new this.registryModel(registry);
        return createdRegistry.save();
    }
}

