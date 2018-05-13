import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css','./app.component.css']
})
export class AppComponent {
  task = {};
  myTasks = [];

  addTask () {
    this.task.status = 'pending'
    this.myTasks.push(this.task);
    this.task = {}
  }
}
