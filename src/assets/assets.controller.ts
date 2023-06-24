import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { InputAsset } from './assets.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  all() {
    return this.assetsService.all();
  }

  @Post()
  create(@Body() body: InputAsset) {
    return this.assetsService.create(body);
  }
}
