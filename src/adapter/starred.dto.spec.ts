import { StarredDto } from "./starred.dto";

describe('StarredModel', () => {
    
    test('instanceStarredModel', () => {
        
        expect(
            new StarredDto(
                'odoo', 
                'Odoo. Open Source Apps To Grow Your Business.', 
                'public', 
                'https://api.github.com/repos/odoo/odoo')
            ).toBeInstanceOf(StarredDto)
    })

});