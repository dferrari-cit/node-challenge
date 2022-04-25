import { UserSchemaMapper } from "./user.schema.mapper";
import { UsersRepository } from "./users.repository";
import { Users, UsersDocument } from "./users.schema";
import { Model } from "mongoose";
import { UserModel } from "../model/user.model";
import { StarredModel } from "../model/starred.model";
import { UsersService } from "./users.service";
import { UserDto } from "../adapter/user.dto";
import { StarredDto } from "../adapter/starred.dto";

describe('UsersService', () => {
    let service: UsersService;
    let mapper: UserSchemaMapper;
    let repository: UsersRepository;
    let document: Model<UsersDocument>;
    let user: Users;
    let userModel: UserModel;
    let starredModel: StarredModel;
    let userDto: UserDto;
    let starredDto: StarredDto;
    beforeEach(() => {
        mapper = new UserSchemaMapper();
        repository = new UsersRepository(document);
        service = new UsersService(repository);
        user = new Users();
        starredModel = new StarredModel('test','test','test','test')
        userModel = new UserModel('test','test','test','test',[starredModel]);
        starredDto = new StarredDto('test','test','test','test');
        userDto = new UserDto('test','test','test','test','test');
    });
    describe('createUser', () => {
        it('should create new register of UsersSchema',() => {
            jest.spyOn(mapper, 'modelToSchema').mockReturnValue(user);
            jest.spyOn(repository, 'create').mockImplementation(() => {
                return new Promise(() => user);
            });

            service.createUser(userModel).then(result => {
                expect(result).toBeInstanceOf(Users);
            });
        });
    });
    describe('findUser', () => {
        it('should create new register of UsersSchema',() => {
            jest.spyOn(mapper, 'schemaToDto').mockImplementation(() => {
                return [userDto, [starredDto]]
            });
            jest.spyOn(repository, 'findOne').mockImplementation(() => {
                return new Promise(() => user);
            });

            service.findUser('test').then(result => {
                expect(result).toEqual([userDto, [starredDto]]);
            });
        });
    });
});