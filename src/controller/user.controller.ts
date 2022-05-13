import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Registry } from "../model/registry.model";
import { RemoteDBService } from "../service/remote.db.service";
import { UserMapper } from "../mapper/user.model.mapper";
import { UserModel } from "../model/user.model";
import { UserService } from "../service/user.service";
import { Publisher } from "src/util/publisher";
require('dotenv').config()


@Controller('user')
@ApiTags('gitHub-User')
export class UserController {
    constructor(
        private userService: UserService,
        private userMapper: UserMapper,
        private registryService: RemoteDBService) { }

    @Get(':user')
    @ApiOperation({ summary: 'GitHub User Name', description: 'Show data for valid user.', operationId: 'UserName' })
    @ApiResponse({ status: 200, description: 'Successful!', type: UserModel })
    @ApiResponse({
        status: 404, description: 'User not found!',
        schema: {
            properties: {
                statusCode: {
                    type: "number",
                    example: '404'
                },
                message: {
                    type: "string",
                    example: 'User not found!'
                },
                timestamp: {
                    type: "string",
                    example: '2000-01-10T13:00:00.055Z'
                },
                path: {
                    type: "string",
                    example: '/user/fulano00876'
                },
            }
        }
    })
    @ApiResponse({
        status: 500, description: 'Internal Server Error',
        schema: {
            properties: {
                statusCode: {
                    type: "number",
                    example: '500'
                },
                message: {
                    type: "string",
                    example: 'Cannot establish connection with GitHub API.'
                },
                timestamp: {
                    type: "string",
                    example: '2000-01-10T13:00:00.055Z'
                },
                path: {
                    type: "string",
                    example: '/user/fulano00876'
                },
            }
        }
    })
    async userInfo(@Param('user') user: string) {
        const response = await this.userService.findByUserName(user);

        const registry = new Registry(user)
        const publisher = new Publisher(JSON.stringify(registry), process.env.EXCHANGE, process.env.DATABASE_REMOTE_BINDING_KEY, process.env.DATABASE_REMOTE_QUEUE)
        publisher.publisheInExchange()

        return this.userMapper.dtoToModel(response);
    }
}