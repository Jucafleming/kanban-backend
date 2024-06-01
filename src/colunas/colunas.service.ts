import { Injectable } from '@nestjs/common';
import { CreateColunaDto } from './dto/create-coluna.dto';
import { UpdateColunaDto } from './dto/update-coluna.dto';
import { Coluna } from './entities/coluna.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ColunasService {

  constructor(
    @InjectRepository(Coluna)
    private colunaRepository: Repository<Coluna>,
  ){}
  create(createColunaDto: CreateColunaDto) {
    const coluna = new Coluna();
    coluna.nome = createColunaDto.nome;
    coluna.ordem = createColunaDto.ordem;
    coluna.quadroId = createColunaDto.quadroId;


    return this.colunaRepository.save(coluna);
  }

  findAllByQuadroId(quadroId: number) {
    return this.colunaRepository.find({
      where: {
        quadroId,
      },
    });
  }


  update(id: number, updateColunaDto: UpdateColunaDto) {
    return this.colunaRepository.update(id,{
      nome: updateColunaDto.nome,
      ordem: updateColunaDto.ordem
    });
  }

  //jwt block todo
  remove(id: number) {
    return `This action removes a #${id} coluna`;
  }
}
