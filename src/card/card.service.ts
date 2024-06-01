import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CardService {

  constructor(
    @InjectRepository(Card)
    private colunaRepository: Repository<Card>,
  ){}

  create(createCardDto: CreateCardDto) {
   const card = new Card();
   card.nome = createCardDto.nome;
   card.conteudo = createCardDto.conteudo;
   card.ordem = createCardDto.ordem;
   card.colunaId = createCardDto.colunaId;
    

  }

  findAll() {
    return `This action returns all card`;
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
