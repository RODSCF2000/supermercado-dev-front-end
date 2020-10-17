export interface Usuario {
    id: number;
    nome: string;
    sobrenome: string;
    login: string;
    senha: string;
    confirmaSenha: string;
    nascimento: string;
    telefone: number;
    email: string;
    cep: number;
    ativo: boolean;
}