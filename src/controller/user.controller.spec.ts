import { Test } from '@nestjs/testing';
import { UserModel } from '../model/user.model';
import { UserMapper } from '../mapper/user.model.mapper';
import { UserService } from "../service/user.service";
import { UserController } from "./user.controller";


const userModel: UserModel = new UserModel('avatar', 'name', 'bio', 'urlUser', [])

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [UserController],
            providers: [{
                provide: UserService,
                useValue: {
                    findByUserName: jest.fn()
                }
            },
            {
                provide: UserMapper,
                useValue: {
                    dtoToModel: jest.fn().mockResolvedValue(userModel),
                    dtoListToModelList: jest.fn()
                }
            }]
        }).compile();

        userController = moduleRef.get<UserController>(UserController);
        userService = moduleRef.get<UserService>(UserService);
    });

    it('shoud be defined', () => {
        expect(userController).toBeDefined();
        expect(userService).toBeDefined();
    });

    describe('userInfo', () => {
        it('shoud return user infos', async () => {
            // Arrange
            const user = '';
            // Act
            const result = await userController.userInfo(user);
            // Assert
            expect(userService.findByUserName).toBeCalledTimes(1);
            expect(result).toBeInstanceOf(UserModel);
            expect(result).toEqual(userModel);
        });

        it('shoud throw Error', () => {
            // Arreange
            jest.spyOn(userService, 'findByUserName').mockRejectedValueOnce(new Error());

            // Assert
            expect(userController.userInfo('')).rejects.toThrowError();
        });
    });
});
