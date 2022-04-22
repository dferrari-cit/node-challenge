import { StarredDto } from "../adapter/starred.dto";
import { UserDto } from "../adapter/user.dto";
import { UserModel } from "../model/user.model";
import { ResponseStarreMock } from "../../test/service/mocks/response-starred-dto.mock";
import { ResponseUserMock } from "../../test/service/mocks/response-user-dto.mock";
import { UserMapper } from "./user.model.mapper";

describe('UserMapper', () => {
    let userDto: UserDto;
    let starredDto: StarredDto[];
    let userMapper: UserMapper;

    beforeEach(() => {
        userDto = ResponseUserMock;
        starredDto = ResponseStarreMock;
        userMapper = new UserMapper();
    });

    describe('dtoToModel', () => {
        it('should return a instance of Usermodel', () => {
            expect(userMapper.dtoToModel([userDto, starredDto])).toBeInstanceOf(UserModel);
        });
    });
});