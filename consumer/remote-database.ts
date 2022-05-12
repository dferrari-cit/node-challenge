import { Schema, model, connect } from 'mongoose';
require('dotenv').config()

// 1. Create an interface representing a document in MongoDB.
export interface Registry {
    searchedName: string;
    searchedDate: string;
}

// 2. Create a Schema corresponding to the document interface.
const registrySchema = new Schema<Registry>({
    searchedName: { type: String, required: true },
    searchedDate: { type: String, required: true }
});

// 3. Create a Model.
export const UserRegistry = model<Registry>('Registry', registrySchema);

async function saveRegistry(name: string, date: string) {
  // 4. Connect to MongoDB
  await connect(process.env.DATABASE_REMOTE_STRING_CONNECTION);

  const user = new UserRegistry({
    searchedName: name,
    searchedDate: date,
  });
  await user.save();
}

export default saveRegistry;