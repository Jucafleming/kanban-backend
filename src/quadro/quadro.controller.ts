import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuadroService } from './quadro.service';
import { CreateQuadroDto } from './dto/create-quadro.dto';
import { UpdateQuadroDto } from './dto/update-quadro.dto';

@Controller('quadro')
export class QuadroController {
  constructor(private readonly quadroService: QuadroService) {}

  @Post()
  create(@Body() createQuadroDto: CreateQuadroDto) {
    return this.quadroService.create(createQuadroDto);
  }

  @Get()
  findAll() {
        //todo  fetch do jwt
    const userId = 1
    return this.quadroService.findAllByUsuarioId(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quadroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuadroDto: UpdateQuadroDto) {
    return this.quadroService.update(+id, updateQuadroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quadroService.remove(+id);
  }
}
