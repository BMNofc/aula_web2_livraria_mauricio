import { Injectable } from '@nestjs/common';

let autores = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },

  {
    id: 2,
    nome: 'Maria de Oliveira',
    email: 'maria.oliveira@gmail.com',
  },

  {
    id: 3,
    nome: 'Pedro Santos',
    email: 'pedro.santos@gmail.com',
  },
];

@Injectable()
export class AutoresService {
  listarAutores() {
    if (!autores) {
      return 'Não há autores cadastrado';
    }
    return autores;
  }

  listarAutor(id: Number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);
    if (!autorEncontrado) {
      return 'Autor não encontrado';
    }
    return autorEncontrado;
  }
}
