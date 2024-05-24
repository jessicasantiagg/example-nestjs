import { Injectable } from '@nestjs/common';
import { Task } from './model/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private repository: Repository<Task>
  ){}

  async create(entity: Task) {
    const saved = this.repository.create(entity);
    return await this.repository.save(saved);
  }

  findAll() {
    return `This action returns all task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
