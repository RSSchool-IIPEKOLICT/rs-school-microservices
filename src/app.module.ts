import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DataModule } from './data/data.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { resolve } from 'path'

@Module({
	imports: [
		DataModule,
		ServeStaticModule.forRoot({
			rootPath: resolve(__dirname, '..', 'public'),
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
