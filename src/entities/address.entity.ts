import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Restaurant from "./restaurant.entity";

enum State {
  AC = "AC",
  AL = "AL",
  AM = "AM",
  AP = "AP",
  BA = "BA",
  CE = "CE",
  DF = "DF",
  ES = "ES",
  GO = "GO",
  MA = "MA",
  MG = "MG",
  MS = "MS",
  MT = "MT",
  PA = "PA",
  PB = "PB",
  PE = "PE",
  PI = "PI",
  PR = "PR",
  RJ = "RJ",
  RN = "RN",
  RO = "RO",
  RR = "RR",
  RS = "RS",
  SC = "SC",
  SE = "SE",
  SP = "SP",
  TO = "TO",
}

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  number: string;

  @Column({ nullable: false })
  zipCode: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false, type: "enum", enum: State })
  state: State;

  @OneToOne(() => Restaurant)
  @JoinColumn()
  restaurant: Restaurant;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Address;
