import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAdd: boolean = false;
  text: string = 'Add';
  color: string = 'green';
  @Output() onAddClick: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void { }

  toggleAddTask() {
    this.showAdd = !this.showAdd;
    this.onAddClick.emit(this.showAdd);
    if (this.showAdd) {
      this.text = "Close";
      this.color = "#900C3F";
    }
    else {
      this.text = "Add";
      this.color = "green";
    }
  }
}
