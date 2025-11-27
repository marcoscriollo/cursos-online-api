import { IsString, IsNumber,IsBoolean,IsDate } from "class-validator";
export class UpdateCursoDto {
        @IsString()
        codigo: string;
        @IsString()
        titulo: string;
        @IsString()
        subtitulo: string;
        @IsString()
        descripcion:string
        @IsNumber()
        nivel: number;
        @IsNumber()
        duracion_horas: number;
        @IsNumber()
        costo: number;
        @IsString()
        modalidad: string;
        @IsDate()
        fecha_inicio: Date;
        @IsBoolean()
        estado: boolean;
}