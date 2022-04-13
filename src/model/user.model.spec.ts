import { UserModel } from "./user.model";

describe('UserModel', () => {
    test('instanceOfUserModel', () => {
        expect(new UserModel(
            'https://avatars.githubusercontent.com/u/000000?v=0',
            'Fulano de tal',
            'I love potato',
            'https://api.github.com/users/fulano00876',[])
            ).toBeInstanceOf(UserModel);
    })
});