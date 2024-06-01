import { Module } from '@nestjs/common';
import { ColunasService } from './colunas.service';
import { ColunasController } from './colunas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coluna } from './entities/coluna.entity';

@Module({
  controllers: [ColunasController],
  providers: [ColunasService],
  imports: [TypeOrmModule.forFeature([Coluna])],
})
export class ColunasModule {}
