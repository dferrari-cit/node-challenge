import { StarredDto } from "../adapter/starred.dto";
import { UserDto } from "../adapter/user.dto";
import { StarredDtoMapper } from "../mapper/starred-dto.mapper";
import { UserDtoMapper } from "../mapper/user-dto.mapper";
import { UserMapper } from "../mapper/user.model.mapper";
import { StarredModel } from "../model/starred.model";
import { UserModel } from "../model/user.model";
import { UserSchemaMapper } from "./local-db.schema.mapper";
import { Users } from "./lodal-db.schema";

describe('UserSchemaMapper', () => {
    let schemaMapper: UserSchemaMapper;
    let starredMapper: StarredDtoMapper;
    let userMapper: UserDtoMapper;
    let modelMapper: UserMapper;
    let user: Users;
    let model: UserModel;
    let starred: StarredModel;
    let starredDto: StarredDto;
    let userDto: UserDto;

    beforeEach(() => {
        starredMapper = new StarredDtoMapper();
        userMapper = new UserDtoMapper();
        modelMapper = new UserMapper();
        schemaMapper = new UserSchemaMapper();
        user = new Users();
        user.avatar = 'test';
        user.bio = 'test';
        user.name = 'test';
        user.starredList = [];
        user.urlUser = 'test';
        starred = new StarredModel('test','test','test','test');
        model = new UserModel('test','test','test','test',[starred]);
        starredDto = new StarredDto('test','test','test','test');
        userDto = new UserDto('test','test','test','test','test');
    });

    describe('modelToSchema', () => {
        it('should return an Users object', () => {

            expect(schemaMapper.modelToSchema(model)).toBeInstanceOf(Users);
        });
    });

    describe('schemaToModel', () => {
        it('should return an Users object', () => {
            jest.spyOn(starredMapper, 'responseToDto').mockImplementation(() => [starredDto]);
            jest.spyOn(userMapper, 'responseToDto').mockImplementation(() => userDto);
            const result = schemaMapper.schemaToModel(user);
            expect(result).toBeInstanceOf(UserModel);
        });
    });

    describe('schemaToDto', () => {
        it('should return an array of userdto e starredDto', () => {
            jest.spyOn(starredMapper, 'responseToDto').mockReturnValue([starredDto,starredDto]);
            jest.spyOn(userMapper, 'responseToDto').mockImplementation(() => userDto);

            const result = schemaMapper.schemaToDto(user);
            const firstResult = result[0];
            const secondResult = result[1];
            const secondResultFirstIndex = secondResult[0];
            console.log(secondResultFirstIndex);

            expect(result).toBeInstanceOf(Array);
            expect(firstResult).toBeInstanceOf(UserDto);
            expect(secondResult).toBeInstanceOf(Array);
        });
    });

    describe('dtoToSchema', () => {
        it('should return an user schema', () => {
            jest.spyOn(modelMapper, 'dtoToModel').mockImplementation(() => model);
            jest.spyOn(schemaMapper, 'modelToSchema').mockImplementation(() => user);
            const result = schemaMapper.dtoToSchema([userDto, [starredDto]]);

            expect(result).toEqual(user);
        });
    });
});