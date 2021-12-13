import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { ArtQuizService } from './art.quiz.service'
import { ArtQuizUserModel } from './art.quiz.user.model'
import { ArtQuizUserDto } from './art.quiz.user.dto'

@Controller('art-quiz')
export class ArtQuizController {
  constructor(private readonly userService: ArtQuizService) {}

  @Get()
  async getAll(): Promise<ArtQuizUserModel[]> {
    return this.userService.getAll()
  }

  @Post('register')
  async register(@Query('nickname') nickname: string): Promise<string> {
    return this.userService.register(nickname)
  }

  @Put('update')
  async update(@Body() dto: ArtQuizUserDto): Promise<boolean> {
    return this.userService.updateUser(dto)
  }

  @Delete('delete')
  async delete(@Query('id') id: string): Promise<boolean> {
    return this.userService.delete(id)
  }
}
