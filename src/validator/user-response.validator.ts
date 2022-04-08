import { Injectable } from "@nestjs/common";
import { UserNotFound } from "src/errors/user-not-found.error";
import { UserMapper } from "src/mapper/user.model.mapper";

@Injectable()
export class UserResponseValidator{
    validate(response: any, userMapper: UserMapper){
        if(response instanceof UserNotFound){
            return {
                message: response.message,
                status: response.status
            }
        }else{
            return userMapper.dtoToModel(response);
        }
    }
}
