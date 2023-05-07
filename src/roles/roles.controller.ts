import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

  constructor(private roleService: RolesService) { }

  // @ApiOperation({ summary: 'Создадим пользователя' })
  // @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto)
  }

  // @ApiOperation({ summary: 'Получение всех пользователей' })
  // @ApiResponse({ status: 200, type: [User] })
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value)
  }

}
