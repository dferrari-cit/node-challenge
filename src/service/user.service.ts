import { Injectable } from "@nestjs/common";
import { request } from "@octokit/request";
@Injectable()
export class UserService{
    async findByUserName(userName: string): Promise<any>{
        try {
            return await request('GET /users' + userName);
        } catch (error) {
            return error;
        }
    }
    async listStarredsOfUser(starredUrl: string): Promise<any>{
        try {
            return await request('GET /users' + starredUrl);
        } catch (error) {
            return error;
        }
    }
}