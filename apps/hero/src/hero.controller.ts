import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HeroService } from './hero.service';

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @MessagePattern('get')
  public get() {
    return this.heroService.get();
  }

  @MessagePattern('findOne')
  public findOne(@Payload() { id }) {
    return this.heroService.findOne(id);
  }
}
