import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const port = process.env.PORT || 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  await app.listen(port)
}
bootstrap().then(() => console.log(`Server started on port ${port}.`))
