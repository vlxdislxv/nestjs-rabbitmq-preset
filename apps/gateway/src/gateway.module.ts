import { HeroProvider, ProvidersModule } from '@app-core/providers';
import { Env } from '@app-core/env';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: Env.PATH }),
    ProvidersModule.register([HeroProvider]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
