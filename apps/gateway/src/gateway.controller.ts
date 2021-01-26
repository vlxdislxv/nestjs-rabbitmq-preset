import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { GatewayService } from './gateway.service';

@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Get('hero')
  public getHeroes() {
    return this.gatewayService.getHeroes();
  }

  @Get('hero/:id')
  public findHero(@Query('id', ParseIntPipe) id: number) {
    return this.gatewayService.findHero(id);
  }
}
