import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Task } from './model/task.entity';
import { TaskService } from './task.service';
import { TaskStatusDTO } from './dto/task-status-DTO.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: Task) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.taskService.remove(id);
  }


  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.taskService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() entity: TaskStatusDTO) {
    return this.taskService.updateStatus(id, entity);
  }
}
