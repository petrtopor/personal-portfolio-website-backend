import { Controller, Post, Body, Put, Get } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post()
  async handleUpdate(@Body() update: any): Promise<any> {
    await this.telegramService.handleUpdate(update);
  }

  @Post('echo')
  handleEcho(@Body() payload: any) {
    console.log("payload:\n\t", payload)
  }

  @Put('echo')
  update(@Body() ngrokUrl) {
    this.telegramService.setEchoUrl(ngrokUrl.url)
    return `This action updates ngrokUrl to ${ngrokUrl.url}`;
  }

  @Get('echo')
  get() {
    return `ngrokUrl is: ${this.telegramService.getEchoUrl()}`;
  }
}