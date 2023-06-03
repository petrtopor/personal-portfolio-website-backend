import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class TelegramService {
  private readonly API_BASE_URL: string;
  private readonly WEB_APP_URL: string;

  constructor() {
    this.API_BASE_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;
    this.WEB_APP_URL = 'https://petrtopor.github.io/personal-portfolio-website/telegram-web-app.html';
  }

  async handleUpdate(update: any): Promise<void> {
    if (
      update.message &&
      update.message.text &&
      update.message.text.toLowerCase() === '/start'
    ) {
      await this.sendStartMessage(update.message.chat.id);
    }
  }

  async sendRequest(method: string, requestData: any): Promise<any> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    };

    try {
      const response = await fetch(`${this.API_BASE_URL}/${method}`, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }

  async sendStartMessage(chatId: number): Promise<void> {
    const inlineKeyboard = {
      inline_keyboard: [
        [
          {
            text: 'Open Web App',
            web_app: {
              url: this.WEB_APP_URL
            }
          },
        ],
      ],
    };

    await this.sendRequest('sendMessage', {
      chat_id: chatId,
      text: 'Welcome to the bot! Click the button below to access the web app.',
      reply_markup: JSON.stringify(inlineKeyboard),
    });
  }
}