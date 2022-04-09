import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Urls } from '../services/constants'
import { Observable } from 'rxjs';
import { Task } from '../models/Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(Urls.getUrl)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(Urls.postUrl, task, this.httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${Urls.putUrl}/${task.TaskId}`;
    return this.http.put<Task>(url, task, this.httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${Urls.deleteUrl}/${task.TaskId}`;
    return this.http.delete<Task>(url);
  }
}
