import { Exame } from "./exame";

export class Paciente{
    id?:number;
    nome?:string;
    email?:string;
    cpf?:string;
    idade?:number;
    sexo?:string;
    peso?:number;
    altura?:number;
    data = new Date();
    exames?:Exame[];
}