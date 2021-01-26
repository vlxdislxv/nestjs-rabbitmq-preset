import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HeroModule } from './hero.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HeroModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'hero_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listenAsync();
}
bootstrap();
