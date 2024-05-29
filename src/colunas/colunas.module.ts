import { Module } from '@nestjs/common';
import { ColunasService } from './colunas.service';
import { ColunasController } from './colunas.controller';

@Module({
  controllers: [ColunasController],
  providers: [ColunasService],
})
export class ColunasModule {}
