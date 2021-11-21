import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { UserModel } from './user.model'
import { UserService } from './user.service'
import { UserDto } from './user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<UserModel[]> {
    return this.userService.getAll()
  }

  @Post('register')
  async register(@Query('nickname') nickname: string): Promise<string> {
    return this.userService.register(nickname)
  }

  @Put('update')
  async update(@Body() dto: UserDto): Promise<boolean> {
    return this.userService.updateUser(dto)
  }

  @Delete('delete')
  async delete(@Query('id') id: string): Promise<boolean> {
    return this.userService.delete(id)
  }
}
