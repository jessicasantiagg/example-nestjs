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

  async findAll() {
    return await this.repository.find();
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
