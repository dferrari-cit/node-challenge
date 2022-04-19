import * as mongoose from 'mongoose';
import { StarredModel } from '../../model/starred.model';
import { UserModel } from '../../model/user.model';


export const RegistrySchema = new mongoose.Schema(
    {
        avatar: String,
        name: String,
        bio: String,
        urlUser: String,
        starredList: Array,
        data: Date
    },{
        timestamps: true
    }
)