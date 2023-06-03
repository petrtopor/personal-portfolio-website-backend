import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';

@Module({
  imports: [],
  controllers: [AppController, TelegramController],
  providers: [AppService, TelegramService],
})
export class AppModule {}
