import { Controller, Get } from '@nestjs/common';
import { ScrapingService } from './scraping.service';

@Controller('scraping')
export class ScrapingController {
  constructor(private readonly scrapingService: ScrapingService) {}

  @Get('currency')
  async obtenerPrecioDolar() {
    const currencies = await this.scrapingService.currencies();
    return { currencies };
  }
}
