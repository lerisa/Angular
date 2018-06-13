import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  message: string = "using output and eventemitter child to parent  "

  @Output()
   messageEvent = new EventEmitter<string>();

  sendMessage() {
    console.log("hi");
    console.log(this.message);
    
    this.messageEvent.emit(this.message)
  }
}
