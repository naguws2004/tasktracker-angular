import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  taskName: string = "";
  taskDateTime: Date = new Date();
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.taskName) {
      alert("Please add task name.");
      return;
    }

    const newTask: Task = {
      TaskId: 0,
      TaskName: this.taskName,
      EmailId: "dummy@gmail.com",
      TaskDateTime: this.taskDateTime.toISOString(),
      Remind: this.reminder
    };

    this.onAddTask.emit(newTask);
    
    this.taskName = "";
    this.taskDateTime = new Date();
    this.reminder = false;

  }

}
