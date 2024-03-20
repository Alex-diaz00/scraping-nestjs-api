import { Injectable } from '@nestjs/common';
import axios from 'axios';
import cheerio from 'cheerio';
import { count } from 'console';

@Injectable()
export class ScrapingService {
  async currencies(): Promise<any> {
    try {
      const response = await axios.get('https://eltoque.com/');
      const $ = cheerio.load(response.data);
      const currencies = $('.price-text').text();
      console.log(currencies)
      let strings = currencies.split("P");
      strings.pop()
      strings = strings.map(c => c + "P");

      let dollar = strings[0] ? strings[0] : '';
      let euro = strings[1] ? strings[1] : '';
      let mlc = strings[2] ? strings[2] : '';
    
      let data = {
        "dollar": dollar,
        "euro": euro,
        "mlc": mlc
      }

      return data;
    } catch (error) {
      throw new Error('Error obtaining currencies');
    }
  }
}
