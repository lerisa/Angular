import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private router:Router) { }


  // @Input()
  // childMessage:string;

  message:string ="Hey this message is to show ViewChild implementation  from child to parent";
  ngOnInit() {
  console.log(this.message);
  
  }

  click()
  {
this.router.navigate(['/parent']);

  }


}
