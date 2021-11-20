import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { UserModel } from './user.model'

@Controller('user')
export class UserController {
  @Post(':nickname')
  async register(@Param('nickname') nickname: string) {}

  @Put('update')
  async update(@Body() dto: UserModel) {}

  @Get('results')
  async getAll() {}

  @Get('results/:id')
  async getCurrent(@Param('id') id: string) {}
}
