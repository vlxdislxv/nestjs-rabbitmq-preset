import { FactoryProvider } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const HeroProvider: FactoryProvider = {
  provide: 'HeroProvider',
  useFactory() {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'hero_queue',
        queueOptions: { durable: false },
      },
    });
  },
};
