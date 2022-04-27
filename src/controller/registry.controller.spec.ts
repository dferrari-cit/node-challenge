import { RegistryDtoMapper } from "src/mapper/registry.dto.mapper";
import { RemoteDBService } from "../service/remote.db.service";
import { RegistryController } from "./registry.controller";
import { Model } from "mongoose";
import { Registry, RegistryDocument } from "../model/registry.model";
import { RegistryDto } from "../adapter/registry.dto";


describe('RegistryController', () => {
    let registryService: RemoteDBService;
    let registryController: RegistryController;
    let registryDtoMapper: RegistryDtoMapper;
    let registryModel: Model<RegistryDocument>;

    beforeEach(() => {
        registryService = new RemoteDBService(registryDtoMapper, registryModel);
        registryController = new RegistryController(registryService);
    });

    it('should be defined', () => {
        expect(registryController).toBeDefined();
        expect(registryService).toBeDefined();
    });

    describe('searchRegistry', () => {
        let registry = new Registry('fulano_tal')
        let registries: Array<RegistryDto> = [registry]

        it('should show all registries', async() => {
            // Arrange
            jest.spyOn(registryController, 'getAll')
            jest.spyOn(registryService, 'getAll').mockResolvedValue(registries);

            // Act
            let result = await registryController.getAll();

            // Assert
            expect(registryController.getAll).toBeCalledTimes(1);
            expect(result[0]).toBeInstanceOf(Registry);
            expect(result).toEqual(registries);
        });

        it('should show registries for matched name', async() => {
            // Arrange
            jest.spyOn(registryController, 'getByName')
            jest.spyOn(registryService, 'getByName').mockResolvedValue(registries);

            // Act
            let result = await registryController.getByName(registry.searchedName);

            // Assert
            expect(registryController.getByName).toBeCalledTimes(1);
            expect(result[0]).toBeInstanceOf(Registry);
            expect(result).toEqual(registries);
        });
    
        it('should show registries for matched date', async() => {
            jest.spyOn(registryController, 'getBydate')
            jest.spyOn(registryService, 'getByDate').mockResolvedValue(registries);

            // Act
            let result = await registryController.getBydate(registry.searchedName);

            // Assert
            expect(registryController.getBydate).toBeCalledTimes(1);
            expect(result[0]).toBeInstanceOf(Registry);
            expect(result).toEqual(registries);
        });
    });
});