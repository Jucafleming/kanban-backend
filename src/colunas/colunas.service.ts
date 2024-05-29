import { Injectable } from '@nestjs/common';
import { CreateColunaDto } from './dto/create-coluna.dto';
import { UpdateColunaDto } from './dto/update-coluna.dto';

@Injectable()
export class ColunasService {
  create(createColunaDto: CreateColunaDto) {
    return 'This action adds a new coluna';
  }

  findAll() {
    return `This action returns all colunas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coluna`;
  }

  update(id: number, updateColunaDto: UpdateColunaDto) {
    return `This action updates a #${id} coluna`;
  }

  remove(id: number) {
    return `This action removes a #${id} coluna`;
  }
}
