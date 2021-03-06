import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
  //providers: [UsersService]
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usersService: UsersService, private counterService: CounterService){}

  
  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.counterService.onCounterAdd();
    //console.log(this.counterService.counter);
  }
}
