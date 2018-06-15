import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  
  @Input()
  public person: Person[] = [];

  constructor() {

    this.person.push({

      name: 'lerisa',
      id: 1,
      rollno: 1,
      age: 19
    }, {

        name: 'Chelsea',
        id: 2,
        rollno: 2,
        age: 16
      },
      {
        name: 'Ram',
        id: 3,
        rollno: 10,
        age: 16
      },
      {
        name: 'Shyam',
        id: 4,
        rollno: 17,
        age: 10
      }

    );


    this.person = this.person.map((person: Person) => Object.assign({}, person));
    console.log(this.person);
    
  }

}


export interface Person {
  name: string;
  id: number;
  rollno: number;
  age: number;


}



