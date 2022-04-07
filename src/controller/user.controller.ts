import { Controller, Get, Injectable, Param } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserDto } from "src/adapter/user.dto";
import { UserMapper } from "src/mapper/user.model.mapper";
import { UserModel } from "src/model/user.model";
import { UserService } from "src/service/user.service";

@Controller('user')
@Injectable()
@ApiTags('gitHub-User')
export class UserController {
    constructor(private userService: UserService, private userMapper: UserMapper){}
    @Get(':user')
    @ApiOperation({summary: 'data for valid user'})
    async userInfo(@Param('user') user: string): Promise<UserModel>{
        return this.userMapper.dtoToModel(await this.userService.findByUserName(user));
    }
}