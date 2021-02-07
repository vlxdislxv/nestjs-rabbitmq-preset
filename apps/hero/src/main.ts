import { parseConfig } from '@app-core/env';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HeroModule } from './hero.module';

async function bootstrap() {
  const config = parseConfig();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HeroModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [config.RMQ_URL || 'amqp://localhost:5672'],
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
