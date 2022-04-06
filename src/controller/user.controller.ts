import { Controller, Get, Injectable, Param } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('user')
@Injectable()
@ApiTags('gitHub-User')
export class UserController {

    @Get(':user')
    @ApiOperation({summary: 'data for valid user'})
    userInfo(@Param('user') user: string): string {
        return user + ': infos';
    }

    @Get()
    @ApiOperation({summary: 'starreds user repositories'})
    starreds(): string {
        return 'list of starreds repositories';
    }
}