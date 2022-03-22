import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Connection } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private connection: Connection,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({ email });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async add(user: User) {
    await this.usersRepository.save(user);
  }
  async createMany(users: User[]) {
    await this.connection.transaction(async (manager) => {
      await manager.save(users[0]);
      await manager.save(users[1]);
    });
  }
}
