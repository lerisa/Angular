import { ChildComponent } from './../child/child.component';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,AfterViewInit{


  // parentMessage:string="HI i am parent";
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }


  @ViewChild(ChildComponent) child; //child to parent


  message:string;

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.message=this.child.message;
    this.cdr.detectChanges();
    // ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'null: undefined'. 
    // Current value: 'null: Hey this message is to show ViewChild implementation
    //this above error was resolved using ChangeDetectorRef
  }
}
