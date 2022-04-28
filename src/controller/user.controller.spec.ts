import { UserModel } from '../model/user.model';
import { UserMapper } from '../mapper/user.model.mapper';
import { UserService } from "../service/user.service";
import { UserController } from "./user.controller";
import { RemoteDBService } from '../service/remote.db.service';
import { RegistryDtoMapper } from '../mapper/registry.dto.mapper';
import { UserDtoMapper } from '../mapper/user-dto.mapper';
import { StarredDtoMapper } from '../mapper/starred-dto.mapper';
import { Registry, RegistryDocument } from "../model/registry.model";
import { Model } from "mongoose";
import { UserDto } from '../adapter/user.dto';
import { UsersRepository } from '../local-data-base-users/local-db.repository';
import { UsersDocument } from '../local-data-base-users/lodal-db.schema';
import { UsersService } from '../local-data-base-users/local-db.service';
import { UserSchemaMapper } from '../local-data-base-users/local-db.schema.mapper';


describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;
    let userDtoMapper: UserDtoMapper;
    let starredDtoMapper: StarredDtoMapper;
    let userMapper: UserMapper
    let registryDtoMapper: RegistryDtoMapper;
    let registryModel: Model<RegistryDocument>;
    let dbService: RemoteDBService;
    let userDocument: Model<UsersDocument>;
    let dbLocalService: UsersService;

    let userModel: UserModel = new UserModel('avatar', 'name', 'bio', 'urlUser', [])
    let registry = new Registry(userModel.name);
    let dbCreateResponse: Promise<any> = new Promise(() => { registry });
    let repository = new UsersRepository(userDocument);


    beforeEach(() => {
        userDtoMapper = new UserDtoMapper();
        starredDtoMapper = new StarredDtoMapper();
        dbLocalService = new UsersService(repository, new UserSchemaMapper);
        userService = new UserService(userDtoMapper, starredDtoMapper, dbLocalService);
        userMapper = new UserMapper();
        dbService = new RemoteDBService(registryDtoMapper, registryModel);
        userController = new UserController(userService, userMapper, dbService);
    });

    it('should be defined', () => {
        expect(userController).toBeDefined();
        expect(userService).toBeDefined();
        expect(dbService).toBeDefined();
    });

    describe('userInfo', () => {
        it('should return user infos', async () => {
            // Arrange
            let userName = userModel.name;
            let userDto: UserDto = new UserDto('avatar', 'urlUser', 'starredUrl', 'name', 'bio')

            jest.spyOn(userService, 'findByUserName').mockResolvedValue([userDto, []]);
            jest.spyOn(dbService, 'create').mockImplementation(() => dbCreateResponse);

            // Act
            let result = await userController.userInfo(userName);

            // Assert
            expect(userService.findByUserName).toBeCalledTimes(1);
            expect(result).toBeInstanceOf(UserModel);
            expect(result).toEqual(userModel);
        });

        it('should throw Error', () => {
            // Arreange
            jest.spyOn(userService, 'findByUserName').mockRejectedValueOnce(new Error());

            // Assert
            expect(userController.userInfo(userModel.name)).rejects.toThrowError();
        });

        it('should create a registry persistence in data base', () => {
            // Arreange
            jest.spyOn(dbService, 'create').mockImplementation(() => dbCreateResponse);

            // Act
            let result = dbService.create(registry);

            // Assert
            expect(dbService.create).toBeCalledTimes(1);
            expect(dbCreateResponse).toEqual(result);
        });

    });
});
