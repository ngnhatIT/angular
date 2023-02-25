import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  displayChild: boolean = true;
  message: String = "";

  constructor() {
    console.log("AppComponent:Constructor");
  }
  ngOnInit(): void {
    this.displayChild = false;
    console.log(`${this.displayChild}`)
  }

  ngDoCheck() {
    this.message = this.displayChild ? "Nhat" : "My"
  }

  toggle() {
    this.displayChild = !this.displayChild;
    console.log(`${this.displayChild}`)
  }

  title = 'learning';
}
