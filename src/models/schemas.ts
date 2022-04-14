import mongoose from 'mongoose';

const { Schema } = mongoose;

const githubUserSchema = new Schema({
    name: String,
    avatar_url: String,
    bio: String,
    html_url: String,
    gitRepository: [{
        name: String,
        description: String,
        private: Boolean,
        full_name: String
    }]
})

const User = mongoose.model('User', githubUserSchema);

export { User }; 