import { Injectable } from '@nestjs/common'
import { UserModel } from './user.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
  private readonly defaultAnswers: number[] = [...Array(12).keys()].map(() => 0)

  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
  ) {}

  async getAll(): Promise<UserModel[]> {
    return this.userModel.find().lean()
  }

  async register(nickname: string): Promise<string> {
    const newUser = await this.userModel.create({
      nickname,
      painters: this.defaultAnswers,
      images: this.defaultAnswers,
    })

    return newUser.id.toString()
  }

  async updateUser({ id, painters, images }: UserDto) {
    await this.userModel.findByIdAndUpdate(id, { painters, images })
    return true
  }

  async delete(id: string) {
    await this.userModel.findByIdAndDelete(id)
    return true
  }
}
