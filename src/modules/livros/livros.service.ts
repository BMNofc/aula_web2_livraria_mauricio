import { LivrosRepository } from './livros.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LivrosService {
  constructor(private readonly livrosRepository: LivrosRepository) {}

  async listarLivros() {
    return await this.livrosRepository.listarLivros();
  }
}
