import { UserDto } from "../../adapter/user.dto";

export const ResponseUserMock = new UserDto(
    'https://avatars.githubusercontent.com/u/91613?v=4',
    'https://api.github.com/users/teste',
    'https://api.github.com/users/teste/starred{/owner}{/repo}',
    null,
    null
);