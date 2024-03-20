import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapingService } from './scraping/scraping.service';
import { ScrapingController } from './scraping/scraping.controller';

@Module({
  imports: [],
  controllers: [AppController, ScrapingController],
  providers: [AppService, ScrapingService],
})
export class AppModule {}
