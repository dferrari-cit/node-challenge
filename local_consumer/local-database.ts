import { Schema, model, connect } from 'mongoose';
require('dotenv').config()

// 1. Create an interface representing a document in MongoDB.
export interface User {
    avatar: string;
    name: string;
    bio: string;
    urlUser: string;
    starredList: Array<any>;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<User>({
    avatar: { type: String },
    name: { type: String },
    bio: { type: String },
    urlUser: { type: String },
    starredList: { type: [] }
});

// 3. Create a Model.
const UserRegistry = model<User>('Users', userSchema);

async function saveUserRegistry(userInfo: any, starredList: Array<any>) {
    // 4. Connect to MongoDB
    await connect('mongodb://' + process.env.DATABASE_LOCAL_USER + ':' + process.env.DATABASE_LOCAL_PASSWORD +
        '@' + process.env.DATABASE_LOCAL_CONTAINER_CONECTION + ':' + process.env.DATABASE_LOCAL_CONTAINER_PORT +
        '/' + process.env.DATABASE_LOCAL_NAME + '?authSource=admin');

    const user = new UserRegistry({
        avatar: userInfo.avatar_url ? userInfo.avatar : '',
        name: userInfo.name ? userInfo.name : '',
        bio: userInfo.bio ? userInfo.bio : '',
        urlUser: userInfo.url ? userInfo.url : '',
        starredList: starredList ? starredList : []
    });

    await user.save();
}

export default saveUserRegistry;