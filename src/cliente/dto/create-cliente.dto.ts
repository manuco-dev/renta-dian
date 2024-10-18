import { IsString, IsEmail, IsNotEmpty } from "class-validator";


export class CreateClienteDto {

    @IsNotEmpty({ message: "El nombre es obligatorio" })
    name: string;

    @IsString()
    @IsNotEmpty({ message: "El apellido es obligatorio" })
    lastname: string;

    @IsEmail({}, { message: "Debe proporcionar un correo electrónico válido" })
    email: string;

    @IsString()
    cel: string;
}
