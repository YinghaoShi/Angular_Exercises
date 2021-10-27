import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  buttonControl(){
    if (!this.username){
      return true;
    } else{
      return false;
    }
  }

  buttonReset(){
    this.username = '';
  }
  

}
