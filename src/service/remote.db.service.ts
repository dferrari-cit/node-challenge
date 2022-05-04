import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { validateDay } from "../util/validate-day";
import { validateRegex } from "../util/validate-regex";
import { RegistryDto } from "../adapter/registry.dto";
import { RegistryDtoMapper } from "../mapper/registry.dto.mapper";
import { Registry, RegistryDocument } from "../model/registry.model";


@Injectable()
export class RemoteDBService {
    constructor(
        private registryDtoMapper: RegistryDtoMapper,
        @InjectModel('Registry') private readonly registryModel: Model<RegistryDocument>
    ) { }

    async getAll(): Promise<Array<RegistryDto>> {
        const response = await this.registryModel.find().exec();
        return this.registryDtoMapper.responseToDto(response);
    }

    async getByName(name: string): Promise<Array<RegistryDto>> {
        const response = await this.registryModel.find({ searchedName: name }).exec();
        return this.registryDtoMapper.responseToDto(response);
    }

    async getByDate(data: string): Promise<Array<RegistryDto>> {
        const dayValidated = validateDay(data);
        const result = validateRegex(dayValidated);
        const response = await this.registryModel.find({ searchedDate: { $regex: result } }).exec();
        return this.registryDtoMapper.responseToDto(response);
    }

    async create(registry: Registry) {
        return new this.registryModel(registry).save();
    }
}

