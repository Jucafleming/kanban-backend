import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity()
export class Quadro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
    
    @ManyToMany(() => Usuario, (usuario)=> usuario.quadro)
    usuario: Usuario[];
}
