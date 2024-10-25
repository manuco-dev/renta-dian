import { IsString, IsEmail, IsNotEmpty, IsOptional } from "class-validator";


export class CreateClienteDto {

    @IsOptional()
    cedula: string;

    @IsOptional()
    name: string;

    @IsString()
    @IsOptional({ message: "El apellido es obligatorio" })
    lastname: string;

    @IsEmail({}, { message: "Debe proporcionar un correo electrónico válido" })
    @IsOptional()
    email: string;

    @IsString()
    cel: string;
}
