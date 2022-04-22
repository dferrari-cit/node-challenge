import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

@Schema()
export class Registry {
    @ApiProperty({
        description: 'GitHub user name',
        example: 'fulano_tal'
    })
    @Prop()
    searchedName: string;

    @ApiProperty({
        description: 'Date of search',
        example: 'Sun-Jan-1-2022-00:00'
    })
    @Prop()
    searchedDate: string;

    constructor(searchedName: string) {
        this.searchedName = searchedName;
        this.searchedDate = new Date().toString().slice(0, 21).replace(/ /g, '-');
    }
}

export type RegistryDocument = Registry & Document;
export const RegistrySchema = SchemaFactory.createForClass(Registry);