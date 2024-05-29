import { Quadro } from 'src/quadro/entities/quadro.entity';
import { Injectable } from '@nestjs/common';
import { CreateQuadroDto } from './dto/create-quadro.dto';
import { UpdateQuadroDto } from './dto/update-quadro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuadroService {
  constructor(
    @InjectRepository(Quadro)
    private quadroRepository: Repository<Quadro>,
  ){}

  create(createQuadroDto: CreateQuadroDto) {
    const quadro = new Quadro();
    quadro.nome = createQuadroDto.nome;

    return this.quadroRepository.save(quadro);
  }

  findAllByUsuarioId(usuarioId: number) {
    return this.quadroRepository.find({
      where:{
        usuario: {id: usuarioId}},
        relations: ['usuario'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} quadro`;
  }

  update(id: number, updateQuadroDto: UpdateQuadroDto) {
    return this.quadroRepository.update(id, {
      nome: updateQuadroDto.nome,
    })
  }

  remove(id: number) {
    return this.quadroRepository.delete(id);
  }
}
