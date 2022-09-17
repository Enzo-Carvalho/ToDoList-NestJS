import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Max, MaxLength } from "class-validator";
import { Tarefa } from "src/tarefa/entities/tarefa.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity('tb_categoria')
export class Categoria{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(500)
    @Column({nullable: false, length:500})
    @ApiProperty()
    descricao: string

    @OneToMany(()=> Tarefa, (tarefa)=> tarefa.categoria)
    @ApiProperty({type: () => Tarefa})
    tarefas: Tarefa[]
}