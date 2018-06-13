import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
  message:string;

  constructor(private data: DataService) { }

 

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
}
