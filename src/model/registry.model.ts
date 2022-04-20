import { Document } from "mongoose";

export class Registry {
    searchedName: string;
    searchedData: string;
}

export type RegistryDocument = Registry & Document;