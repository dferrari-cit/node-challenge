import { HttpException, HttpStatus } from "@nestjs/common";
import { InternalServerError } from "../exception/internal-server-error.exception";
import { UserNotFound } from "../exception/user-not-found.exception";
import { StarredDto } from "../adapter/starred.dto";
import { UserDto } from "../adapter/user.dto";
import { StarredDtoMapper } from "../mapper/starred-dto.mapper";
import { UserDtoMapper } from "../mapper/user-dto.mapper";
import { UserService } from "./user.service";
import { request } from "@octokit/request";

describe('UserService', () => {
    const userDtoMapper = new UserDtoMapper();
    const starredDtoMapper = new StarredDtoMapper();
    const userService = new UserService(userDtoMapper, starredDtoMapper);
    beforeEach(() => {
        jest.spyOn(userDtoMapper, 'responseToDto').mockImplementation(() => {
            return new UserDto('test','test','test','test','test');
        });
        jest.spyOn(starredDtoMapper, 'responseToDto').mockImplementation(() => {
            return [new StarredDto('test','test','test','test')];
        });
    });
    it('shoud be defined', () => {
        expect(userService).toBeDefined();
        expect(userDtoMapper).toBeDefined();
        expect(starredDtoMapper).toBeDefined();
    });

    describe('findByUserName', () => {
       it('should return an instance of array of UserDto and StarredDto', async () => {
           const result = [
               new UserDto('test','test','test','test','test'),
               [
                new StarredDto('test','test','test','test')
               ]
            ];
            const request = jest.fn(async (urlTest: string) => 'test');
           expect(await userService.findByUserName('test')).toEqual(result);
       }); 
       it('should throw HttpException', async () => {
            jest.spyOn(userDtoMapper, 'responseToDto').mockImplementation(() => {
                throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
            });
            await userService.findByUserName('test').catch(error => {
                expect(error).toBeInstanceOf(UserNotFound);
            });
        });
        it('should throw HttpException', async () => {
            jest.spyOn(userDtoMapper, 'responseToDto').mockImplementation(() => {
                throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
            });
            await userService.findByUserName('test').catch(error => {
                expect(error).toBeInstanceOf(InternalServerError);
            });
        });
    });
});