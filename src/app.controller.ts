import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/phrases/subheader')
  async getPhrasesSubheader() {
    return await this.appService.getPhrases('subheader');
  }

  @Get('/phrases/footer')
  async getPhrasesFooter() {
    return await this.appService.getPhrases('footer');
  }
}
