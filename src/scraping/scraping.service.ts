import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as cheerio from 'cheerio';

@Injectable()
export class ScrapingService {
  constructor(private readonly httpService: HttpService) {}
  async getExchangeRates(): Promise<any> {
    try {
      const url = 'https://eltoque.com/';
      const { data } = await firstValueFrom(this.httpService.get(url));

      const $ = cheerio.load(data);

      const rates: Record<string, string> = {};
      $('table tbody tr').each((index, element) => {
        let currency = $(element).find('.currency').text().trim();
        const price = $(element).find('.price-text').text().trim();

        if (currency && price) {
          currency = currency.split(' ')[1];
          rates[currency] = price;
        }
      });

      return rates;
    } catch (error) {
      throw new Error('Error obtaining currencies');
    }
  }
}
