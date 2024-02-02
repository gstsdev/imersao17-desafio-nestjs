import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryColumn()
  id: string;

  @Column({ length: 5 })
  symbol: string;

  static create(id: string, symbol: string) {
    const asset = new Asset();

    asset.id = id;
    asset.symbol = symbol;

    return asset;
  }
}
