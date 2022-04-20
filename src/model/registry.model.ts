import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export class Registry {
    @ApiProperty({
        description: 'GitHub user name',
        example: 'fulano_tal'
    })
    searchedName: string;

    @ApiProperty({
        description: 'Date of search',
        example: 'Sun-Jan-1-2022-00:00'
    })
    searchedDate: string;
}

export type RegistryDocument = Registry & Document;