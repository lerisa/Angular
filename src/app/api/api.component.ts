import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  someVar: any;
  showSpinner:boolean=true;
  constructor(private httpClient: HttpClient, private http: Http) { }

  ngOnInit() {
    this.httpClient.get('https://api.myjson.com/bins/1fxrce').subscribe(e => {
      console.log(this.showSpinner);
      
      this.showSpinner=false;
      console.log(e);
      this.someVar = e;
      console.log(this.someVar);

    });
  }

}
