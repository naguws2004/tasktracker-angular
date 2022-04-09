import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  TaskDateTimeString: string;

  constructor() {
    this.task = <Task>{};
    this.TaskDateTimeString = "";
  }

  ngOnInit(): void {
    try {
      const date = new Date(this.task.TaskDateTime.toLocaleString());
      this.TaskDateTimeString = date.toDateString() + ' ' + date.toLocaleTimeString();
    } catch(err) {
      this.TaskDateTimeString = "";
    }
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
