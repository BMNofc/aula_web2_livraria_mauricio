import { CriarAutor } from './../../db/schemas/autores';
import { AutoresRepository } from './autores.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutorDTO, CriarAutorDto } from './autores.dto';

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
  constructor(private readonly autoresRepository: AutoresRepository) {}

  async listarAutores() {
    return this.autoresRepository.listarAutores();
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listaAutor(id);

    if (autorEncontrado.length === 0) {
      throw new NotFoundException(`Autor com id ${id} não encontrado`);
    }

    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutorDto) {
    return this.autoresRepository.criarAutor(bodyRequest);
  }

  //  atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDTO) {
  //    const autorEncontrado = this.listarAutor(idAutor);

  //    if (!bodyRequest.nome && !bodyRequest.email) {
  //      throw new BadRequestException('Nome e email são obrigatórios');
  //    }

  //   if (bodyRequest.nome) {
  //      //autorEncontrado.nome = bodyRequest.nome;
  //    }

  //    if (bodyRequest.email) {
  //      //autorEncontrado.email = bodyRequest.email;
  //    }

  //   return autorEncontrado;
  // }

  deletarAutor(idAutor: number) {
    this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }
}
