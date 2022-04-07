interface gitModel {
    Nome: string;
    Avatar: string;
    Biografia: string;
    EnderecoPerfil: string;
    RepostoriosFavoritos: gitRepository[]
}

interface gitRepository {
    Nome: string,
    Descricao: string,
    Indicativo: string,
    EnderecoPerfil: string;
}

export { gitModel, gitRepository }
