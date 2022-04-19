import { StarredDto } from "../../../src/adapter/starred.dto";

export const ResponseStarreMock = [
    new StarredDto(
        'estoque',
        'Controle de Estoque construído com PHP e MySQL, utilizando framework Code Igniter',
        'public',
        'https://api.github.com/repos/marcosvpinto/estoque'
    ),
    new StarredDto(
        'odoo',
        'Odoo. Open Source Apps To Grow Your Business.',
        'public',
        'https://api.github.com/repos/odoo/odoo'
    ),
    new StarredDto(
        'Owin.Catify',
        'Catify your html page',
        'public',
        'https://api.github.com/repos/serbrech/Owin.Catify'
    ),
    new StarredDto(
        'Entropy',
        'A chaotic experimental playground for new features and ideas - check here for small and simple samples for individual features.',
        'public',
        'https://api.github.com/repos/aspnet/Entropy'
    ),
    new StarredDto(
        'imprudence',
        'Metaverse (SL) viewer with an emphasis on usability and bold changes',
        'public',
        'https://api.github.com/repos/kow/imprudence'
    ),
];