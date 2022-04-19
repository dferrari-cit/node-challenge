import * as mongoose from 'mongoose';

export const RegistrySchema = new mongoose.Schema(
    {
        searchedName: String,
        searchedData: String
    }
)