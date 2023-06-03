import { Controller, Post, Body, Get } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  // @Post()
  // async handleUpdate(@Body() update: any): Promise<any> {
  //   await this.telegramService.handleUpdate(update);
  // }

  @Get()
  handleUpdate(): String {
    return 'xui vo rtu'
  }
}