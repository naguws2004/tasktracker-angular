import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { Task } from '../../models/Task'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  displayAdd: boolean = false;
  subsciption: Subscription;
  
  constructor(public auth: AuthService, private taskService: TaskService, private uiService:UiService) {
    this.subsciption = 
      this.uiService.onToggle().subscribe(
        (val)=>(this.displayAdd=val));
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated$) {
      this.auth.user$.subscribe((user)=>{
        this.getTasks(user.email);
      });
    }
  }

  getTasks(emailId: string) {
    this.taskService.getTasks(emailId).subscribe(
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
