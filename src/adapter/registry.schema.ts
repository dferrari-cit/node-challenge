import * as mongoose from 'mongoose';

export const RegistrySchema = new mongoose.Schema(
    {
        searchedName: String,
        searchedDate: String
    }
)