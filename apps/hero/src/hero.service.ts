import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroService {
  private readonly _heroes = [
    { id: 1, name: 'hero1' },
    { id: 2, name: 'hero2' },
  ];

  public get() {
    return this._heroes;
  }

  public findOne(id: number) {
    return this._heroes.find((v) => v.id === id);
  }
}
