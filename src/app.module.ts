import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './assets/entities/asset.entity';
import { Order } from './orders/entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      logging: true,
      entities: [Asset, Order],
    }),
    AssetsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
