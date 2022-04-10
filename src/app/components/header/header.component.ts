import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAdd: boolean = false;
  subsciption: Subscription;

  constructor(private uiService:UiService) { 
    this.subsciption = 
      this.uiService.onToggle().subscribe(
        (val)=>(this.showAdd=val));
  }

  ngOnInit(): void { }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
