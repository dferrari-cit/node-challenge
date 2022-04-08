import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserMapper } from "src/mapper/user.model.mapper";
import { UserModel } from "src/model/user.model";
import { UserService } from "src/service/user.service";
import { UserResponseValidator } from "src/validator/user-response.validator";


@Controller('user')
@ApiTags('gitHub-User')
export class UserController {
    constructor(private userService: UserService, 
        private userMapper: UserMapper, 
        private validator: UserResponseValidator){}
    @Get(':user')
    @ApiOperation({summary: 'data for valid user'})
    @ApiResponse({status: 200, description:'Successful!', type: UserModel})
    @ApiResponse({status: 404, description:'User not found!'})
    async userInfo(@Param('user') user: string){
        const response = await this.userService.findByUserName(user);
        return this.validator.validate(response, this.userMapper);
    }
}