import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthenticationComponent implements OnInit {
  text: string = 'Component Ready'
  flag: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  signIn(){
    this.flag = 0
    console.log(this.flag);
    
  }
  signUp(){
    this.flag = 1
    console.log(this.flag);
  }

  // test(){
  //   console.log('Emit');
    
  // }
}
