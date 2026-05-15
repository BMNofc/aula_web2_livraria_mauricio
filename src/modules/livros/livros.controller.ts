import { Controller, Get } from '@nestjs/common';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livroService: LivrosService) {}

  @Get('listar-livros')
  async listarLivros() {
    return await this.livroService.listarLivros();
  }

  //   @Get (listar-livro/:id)
  //   async listarLivro (@Param(@id)){

  //   }
}
