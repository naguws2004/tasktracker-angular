import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  
  @Output() onSelectDateTime: EventEmitter<Date | Date[] | null> = new EventEmitter();
  
  constructor(private i18n: NzI18nService) { 
    this.i18n.setLocale(en_US);
  }

  ngOnInit(): void {
  }

  onOk(result: Date | Date[] | null): void {
    var dateTime = result;
    if (result === null) dateTime = new Date();
    else if (Array.isArray(result)) dateTime = result[0];
    this.onSelectDateTime.emit(result);
  }
}
