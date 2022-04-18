
import { User } from "../models/schemas";


class GetAllStoredUsersService {

  async execute() {
  
    return User.find({});
  }
}

export { GetAllStoredUsersService };
