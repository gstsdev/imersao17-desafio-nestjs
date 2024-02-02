import { Asset } from 'src/assets/entities/asset.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum OrderStatus {
  OPEN = 'open',
  PENDING = 'pending',
  CLOSED = 'closed',
}

type CreateOrderCommand = {
  price: number;
  asset_id: string;
  asset_symbol?: string;
};

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Asset, { eager: true, cascade: ['insert'] })
  @JoinColumn({ name: 'asset_id' })
  asset: Asset;

  @Column()
  asset_id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  status: OrderStatus = OrderStatus.PENDING;

  static create(input: CreateOrderCommand) {
    const order = new Order();
    order.price = input.price;

    if (input.asset_symbol) {
      const asset = Asset.create(input.asset_id, input.asset_symbol);
      order.asset = asset;
    } else {
      order.asset_id = input.asset_id;
    }

    return order;
  }
}
