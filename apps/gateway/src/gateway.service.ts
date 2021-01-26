import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class GatewayService {
  constructor(
    @Inject('HeroProvider')
    private readonly heroClient: ClientProxy,
  ) {}

  public getHeroes() {
    return this.heroClient.send('get', {}).toPromise();
  }

  public findHero(id: number) {
    return this.heroClient.send('findOne', { id }).toPromise();
  }
}
