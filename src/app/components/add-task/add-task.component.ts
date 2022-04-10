import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task'
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  taskName: string = "";
  emailId: string = "";
  taskDateTime: Date = new Date();
  reminder: boolean = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated$) {
      this.auth.user$.subscribe((user)=>{
        this.emailId = user.email;
      });
    }
  }

  onSelected(dateTime: Date | Date[] | null) {
    var date = dateTime ? dateTime.toString() : (new Date()).toString();
    this.taskDateTime = new Date(date);
  }

  onSubmit() {
    if (!this.taskName) {
      alert("Please add task name.");
      return;
    }

    const newTask: Task = {
      TaskId: 0,
      TaskName: this.taskName,
      EmailId: this.emailId,
      TaskDateTime: this.taskDateTime.toISOString(),
      Remind: this.reminder
    };

    if (this.emailId) {
      this.onAddTask.emit(newTask);
    }
    else{
      alert("Login first...to add a task.")
    }
    
    this.taskName = "";
    this.taskDateTime = new Date();
    this.reminder = false;
  }
}
