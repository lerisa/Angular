import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string= '';
  password: string= '';
  constructor(private router:Router) { }

  ngOnInit() {
  }

  postForm():void{
    if(this.name=='admin' && this.password=="admin"){
      this.router.navigate(['/start']);
    }
    else {
      // alert("Invalid credentials")
    }
  }
}
