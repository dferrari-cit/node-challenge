import { StarredDto } from "../adapter/starred.dto";
import { UserDto } from "../adapter/user.dto";
import { StarredDtoMapper } from "../mapper/starred-dto.mapper";
import { UserDtoMapper } from "../mapper/user-dto.mapper";
import { UserService } from "./user.service";
import { ResponseUserMock } from "./mocks/response-user-dto.mock";
import { ResponseStarreMock } from "./mocks/response-starred-dto.mock";
import { HttpException } from "@nestjs/common";

describe('UserService', () => {
    let userService: UserService;
    let userDtoMapper: UserDtoMapper;
    let starredDtoMapper: StarredDtoMapper;
    let userDto: UserDto;
    let starredDto: Array<StarredDto>;
    let name: string;
  
    beforeEach(() => {
        userDtoMapper = new UserDtoMapper();
        starredDtoMapper = new StarredDtoMapper();
        userService = new UserService(userDtoMapper, starredDtoMapper);
        userDto = ResponseUserMock;
        starredDto = ResponseStarreMock;
        name = 'teste';
    });
  
    describe('findByUserName', () => {
      it('should return an array with one userDto and array of starredsDto', async () => {
        let result: [UserDto, Array<StarredDto>] = [userDto,starredDto];
        let response = await userService.findByUserName(name);
        expect(response).toEqual(result);
      });

      it('should return an array with one userDto and array of starredsDto empty',async () => {
        const result: [UserDto, Array<StarredDto>] = [new UserDto(
          'https://avatars.githubusercontent.com/u/102745212?v=4',
          'https://api.github.com/users/anthonygdos',
          'https://api.github.com/users/anthonygdos/starred{/owner}{/repo}',
          null,
          null),[]];
        let response = await userService.findByUserName('Anthonygdos');
        expect(response).toEqual(result);
      });

      it('should return an error', () => {
        return expect(userService.findByUserName('')).rejects.toThrow();
      });
    });
});