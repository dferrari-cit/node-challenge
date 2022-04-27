import { Registry } from "../model/registry.model";
import { RegistryDtoMapper } from "../mapper/registry.dto.mapper";
import { RemoteDBService } from "./remote.db.service";
import { RegistryDto } from "../adapter/registry.dto";
import { getModelToken } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";


describe('RegistryService', () => {
    let registryService: RemoteDBService;
    let registryDto = new RegistryDto('fulano_tal', 'Sun-Jan-1-2022-00:00')

    const mockregistryModel = {
        find: jest.fn(),
        save: jest.fn(),
        exec: jest.fn(),
        new: jest.fn()
    }

    const mockregistryDtoMapper = {
        responseToDto: jest.fn()
    }

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                RemoteDBService,
                {
                    provide: RegistryDtoMapper,
                    useValue: mockregistryDtoMapper
                },
                {
                    provide: getModelToken('Registry'),
                    useValue: mockregistryModel
                }
            ]
        }).compile();

        registryService = moduleRef.get<RemoteDBService>(RemoteDBService);
    });

    it('should be defined', () => {
        expect(registryService).toBeDefined();
    });

    describe('Registry Service methods', () => {
        //Arrenge
        let registry = new Registry('name');
        mockregistryModel.find.mockImplementation(function () { registry; return this });
        mockregistryDtoMapper.responseToDto.mockResolvedValue([registryDto])


        it('should get all registries', async () => {
            //Arrenge
            jest.spyOn(registryService, 'getAll')

            // Act
            let result = await registryService.getAll();

            // Assert
            expect(registryService.getAll).toBeCalledTimes(1);
            expect(result).toEqual([registryDto]);
        });

        it('should get registries for matched name', async () => {
            // Arreange
            jest.spyOn(registryService, 'getByName')

            // Act
            let result = await registryService.getByName(registry.searchedName);

            // Assert
            expect(registryService.getByName).toBeCalledTimes(1);
            expect(result).toEqual([registryDto]);
        });

        it('should get registries for matched date', async () => {
            // Arreange
            jest.spyOn(registryService, 'getByDate')

            // Act
            let result = await registryService.getByDate(registry.searchedDate);

            // Assert
            expect(registryService.getByDate).toBeCalledTimes(1);
            expect(result).toEqual([registryDto]);
        });

        xit('should create a registry persistence in data base', async () => {
            // Arreange
            jest.spyOn(registryService, 'create')

            // Act
            let result = await registryService.create(registry);
            console.log(result)

            // Assert
            expect(registryService.create).toBeCalledTimes(1);

        });

    });
});
