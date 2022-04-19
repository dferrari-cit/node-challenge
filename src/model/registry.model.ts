import { Document } from "mongoose";

export class Registry extends Document{
    searchedName: string;
    searchedData: string;
}