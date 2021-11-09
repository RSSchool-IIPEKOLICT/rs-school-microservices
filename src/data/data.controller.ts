import { Controller, Get } from '@nestjs/common'
import { Data } from '../models/data'

@Controller('data')
export class DataController {
	@Get()
	async getData(): Promise<Data[]> {
		return import('./data.json')
	}
}
