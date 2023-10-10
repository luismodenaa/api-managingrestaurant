import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Restaurant from "./restaurant.entity";
import Category from "./category.entity";
import Promotion from "./promotions.entity";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  image: string;

  @ManyToOne(() => Restaurant)
  restaurant: Restaurant;

  @ManyToOne(() => Category, { eager: true, nullable: false })
  category: Category;

  @OneToOne(() => Promotion)
  @JoinColumn()
  promotion: Promotion;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Product;
