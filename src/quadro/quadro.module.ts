import { Module } from '@nestjs/common';
import { QuadroService } from './quadro.service';
import { QuadroController } from './quadro.controller';
import { Quadro } from './entities/quadro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [QuadroController],
  providers: [QuadroService],
  imports: [TypeOrmModule.forFeature([Quadro])]
})
export class QuadroModule {}
