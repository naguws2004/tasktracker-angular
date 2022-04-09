import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { Task } from '../../models/Task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  displayAdd: boolean = true;
  
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      (tasks) => this.tasks = tasks);
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(
      (task) => this.tasks.push(task));
  }

  updateTask(task: Task) {
    task.Remind = !task.Remind;
    this.taskService.updateTask(task).subscribe();
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => this.tasks = 
      this.tasks.filter((t)=>t.TaskId !== task.TaskId));
  }
}
