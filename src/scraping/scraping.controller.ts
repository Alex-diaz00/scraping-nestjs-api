import { Controller, Get } from '@nestjs/common';
import { ScrapingService } from './scraping.service';

@Controller('scraping')
export class ScrapingController {
  constructor(private readonly scrapingService: ScrapingService) {}

  @Get('rates')
  async getRates() {
    return this.scrapingService.getExchangeRates();
  }
}
