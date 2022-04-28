import { UsersRepository } from "./local-db.repository";
import { Users } from "./lodal-db.schema";
import { getModelToken } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";

describe('UsersRepository', () => {
    let repository: UsersRepository;
    let user: Users;
    const userModelMock = {
        find: jest.fn(),
        findOne: jest.fn(),
        save: jest.fn(),
        exec: jest.fn(),
    }

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                UsersRepository,
                {
                    provide: getModelToken(Users.name),
                    useValue: userModelMock,

                }
            ]
        }).compile();
        user = new Users();
        user.avatar = 'test';
        user.bio = 'test';
        user.name = 'test';
        user.starredList = [];
        user.urlUser = 'test';

        repository = moduleRef.get<UsersRepository>(UsersRepository);
    });
    describe('findOne', () => {
        it('should return schema of user', () => {
            jest.spyOn(userModelMock, 'findOne').mockImplementation(async() => {
                return new Promise(() => user)
            });

            repository.findOne({}).then(result => {
                expect(result).toEqual(user);
            });
        })
    });
    describe('find', () => {
        it('should return a schema array of user', () => {
            jest.spyOn(userModelMock, 'find').mockImplementation(async() => {
                return new Promise(() => user);
            });

            repository.find({}).then(result => {
                expect(result).toEqual(user);
            });
        })
    });
});