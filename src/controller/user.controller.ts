import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserDto } from "src/adapter/user.dto";
import { UserMapper } from "src/mapper/user.model.mapper";
import { UserModel } from "src/model/user.model";
import { UserService } from "src/service/user.service";

@Controller('user')
@ApiTags('gitHub-User')
export class UserController {
    constructor(private userService: UserService, private userMapper: UserMapper){}
    @Get(':user')
    @ApiOperation({summary: 'data for valid user'})
    @ApiResponse({status: 200, description:'Successful!', type: UserModel})
    @ApiResponse({status: 404, description:'User not found!'})
    async userInfo(@Param('user') user: string): Promise<UserModel>{
        return this.userMapper.dtoToModel(await this.userService.findByUserName(user));
    }
}