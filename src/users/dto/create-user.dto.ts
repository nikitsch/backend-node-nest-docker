import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({ example: 'user@tut.by', description: 'Почтовый адрес' })
  readonly email: string;

  @ApiProperty({ example: '123452156', description: 'Пfроль' })
  readonly password: string;
}