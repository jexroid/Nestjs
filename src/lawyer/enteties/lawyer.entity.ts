import { Transform } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity("lawyers")
export class LawyerEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 17 })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, length: 20 })
  firstname: string;

  @Column({ nullable: false, length: 20 })
  lastname: string;

  @Column({ nullable: false, length: 35 })
  email: string;

  @Column({ nullable: false, length: 13 })
  phoneNumber: string;

  @Column({ nullable: false, length: 20 })
  city: string;

  @Column({ nullable: false, length: 20 })
  province: string;

  @Column({ nullable: false, default: false})
  @Transform(({ value }) => value === undefined ? false : value)
  verify: boolean = false;

  @Column({ nullable: true , type: 'float' })
  @Min(0.0)                  
  @Max(5.0)
  @IsNumber()
  rank: number = 2;

  @Column("text", { array: true, nullable: false })
  job_area: string[];
}
