import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent implements OnInit{

  constructor(private usersService: UsersService, private counterService: CounterService){}

  activeUsers = [];
  inactiveUsers = [];
  counter: number;

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    //his.counter = this.counterService.counter;
  }
  
  getCounter(){
    return this.counterService.counter;
  }
}

