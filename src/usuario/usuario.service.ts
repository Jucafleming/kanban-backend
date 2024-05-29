import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm'

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ){}
  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = new Usuario();

    usuario.email = createUsuarioDto.email;
    usuario.primeiroNome = createUsuarioDto.primeiroNome;
    usuario.ultimoNome = createUsuarioDto.ultimoNome;
    usuario.senha = createUsuarioDto.senha;
   return this.usuarioRepository.save(usuario);
  }

  findAllUsuariosByQuadroId(quadroId: number) {
    return this.usuarioRepository.find({
      where:{
        quadro: {id: quadroId}
      }
    })
  }

  findOne(id: number) {
    return this.usuarioRepository.findOneBy({ id });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id, {
      primeiroNome: updateUsuarioDto.primeiroNome,
      ultimoNome: updateUsuarioDto.ultimoNome,
    });
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }
}
