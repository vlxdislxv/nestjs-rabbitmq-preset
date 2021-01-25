import { Test, TestingModule } from '@nestjs/testing';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

describe('HeroController', () => {
  let heroController: HeroController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HeroController],
      providers: [HeroService],
    }).compile();

    heroController = app.get<HeroController>(HeroController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(heroController.getHello()).toBe('Hello World!');
    });
  });
});
