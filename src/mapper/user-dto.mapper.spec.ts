import { UserDto } from "../adapter/user.dto";
import { UserDtoMapper } from "./user-dto.mapper"

describe('UserDtoMapper', () => {
    let userDtoMapper: UserDtoMapper;
    let userDto: UserDto;
    let result;
    beforeEach(() => {
        userDtoMapper = new UserDtoMapper();
        result = new UserDto('test','test','test','test','test');
        
    });

    describe('responseToDto', () => {
        it('should return an instance of UserDto', () => {
            userDto = userDtoMapper.responseToDto({data:{
                avatar_url: 'test',
                url: 'test',
                starred_url: 'test',
                name: 'test',
                bio: 'test'
            }});
            expect(userDto).toBeInstanceOf(UserDto);
            expect(userDto).toEqual(result);
        });
    });
})