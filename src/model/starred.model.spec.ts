import { StarredModel } from "./starred.model";

describe('StarredModel', () => {
    
    test('instanceStarredModel', () => {
        
        expect(
            new StarredModel(
                'estoque', 
                'Controle de Estoque construído com PHP e MySQL, utilizando framework Code Igniter', 
                'public', 
                'https://api.github.com/repos/marcosvpinto/estoque')
            ).toBeInstanceOf(StarredModel)
    })

});

