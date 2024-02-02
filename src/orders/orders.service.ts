import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private orderRepo: Repository<Order>) {}

  create(createOrderDto: CreateOrderDto) {
    const order = Order.create({
      price: createOrderDto.price,
      asset_id: createOrderDto.asset_id,
      asset_symbol: createOrderDto.asset_symbol,
    });

    return this.orderRepo.save(order);
  }

  findAll() {
    return this.orderRepo.find();
  }
}
