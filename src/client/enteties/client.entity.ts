import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity("users")
export class ClientEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  uuid: number;

  @Column({ nullable: true, length: 17})
  username: string;

  @Column({ nullable: false})
  password: string;

  @Column({ nullable: false, length: 20})
  firstname: string;

  @Column({ nullable: false, length: 20 })
  lastname: string;

  @Column({ nullable: false})
  email: string;

  @Column({ nullable: false, length: 13 })
  phoneNumber: string;

  @Column({ nullable: false, length: 20 })
  city: string;

  @Column({ nullable: false, length: 20})
  province: string;

  @Column({ nullable: true})
  profileImagePath: string;
}
