import { RegistryDto } from "../adapter/registry.dto";
import { RegistryDtoMapper } from "./registry.dto.mapper";


describe('RegistryDtoMapper', () => {
    let registryDtoMapper: RegistryDtoMapper;
    let registryDto: RegistryDto;

    beforeEach(() => {
        registryDtoMapper = new RegistryDtoMapper();
        registryDto = new RegistryDto('searchedName', 'searchedDate')
    });

    it('should be defined', () => {
        expect(registryDtoMapper).toBeDefined();
        expect(registryDto).toBeDefined();
    });

    describe('responseToDto', () => {
        it('should return an array of registryDto', () => {
            // Arrange
            let mockRegistry = {
                id: '0000a000a0aa000a0aaa0a0a',
                searchedName: 'searchedName',
                searchedDate: 'searchedDate',
                v: 0
            }
            let response: Array<Object> = [mockRegistry]

            // Act
            let result = registryDtoMapper.responseToDto(response);

            // Assert
            expect(result).toEqual([registryDto])
        });
    });

})