import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const HeroProvider: FactoryProvider = {
  provide: 'HeroProvider',
  useFactory(configService: ConfigService) {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.get<string>('RMQ_URL', 'amqp://localhost:5672')],
        queue: 'hero_queue',
        queueOptions: { durable: false },
      },
    });
  },
  inject: [ConfigService],
};
