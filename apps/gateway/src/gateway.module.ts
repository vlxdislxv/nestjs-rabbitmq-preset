import { HeroProvider, ProvidersModule } from '@app-core/providers';
import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

@Module({
  imports: [ProvidersModule.register([HeroProvider])],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
