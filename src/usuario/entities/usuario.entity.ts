import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, ManyToMany, JoinTable } from 'typeorm';
import * as bycript from 'bcrypt'
import { Quadro } from 'src/quadro/entities/quadro.entity';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    primeiroNome: string;
    
    @Column()
    ultimoNome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @ManyToMany(() => Quadro, (quadro)=> quadro.usuario)
    @JoinTable()
    quadro: Quadro[];


    @BeforeInsert()
    async hashPassword(){
        if(this.senha){
            this.senha = await bycript.hash(this.senha, 10);
        }
    }


}
