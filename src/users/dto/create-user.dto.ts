import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";


export class CreateUserDto {

  @ApiProperty({ example: 'user@tut.by', description: 'Почтовый адрес' })
  @IsEmail({}, { message: 'Некоректный email' })
  @IsString({ message: 'Должно быть строкой' })
  readonly email: string;

  @ApiProperty({ example: '123452156', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 15, { message: 'Не менее 4 и не более 15' })
  readonly password: string;
}