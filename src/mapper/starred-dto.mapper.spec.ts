import { StarredDto } from "../adapter/starred.dto";
import { ResponseStarredMock } from "./mocks/response-starred.mock";
import { StarredDtoMapper } from "./starred-dto.mapper";

describe('StarredDtoMapper', () => {
    let starredDtoMapper: StarredDtoMapper;
    let responseStarredDto: Array<Object>;
    let starredDto: StarredDto[];
    beforeEach(() => {
        starredDtoMapper = new StarredDtoMapper();
        responseStarredDto = ResponseStarredMock;
    });
    describe('responseToDto', () => {
        it('should return an array of StarredDto', () => {
            starredDto = starredDtoMapper.responseToDto(responseStarredDto);
            expect(starredDto[0]).toBeInstanceOf(StarredDto);
        });
        it('StarredDto should have a maximun five positions on your array', () => {
            starredDto = starredDtoMapper.responseToDto(responseStarredDto);
            expect(starredDto.length).toBeLessThanOrEqual(5);
        });
    });
});