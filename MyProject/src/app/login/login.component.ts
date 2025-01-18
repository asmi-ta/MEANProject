import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
   
  a:any;
  b:any;

  url:string = "http://localhost:5000/login";
  msg:any;

  constructor(private http:HttpClient){}
 
 
  save(data:any){
   this.a=  data.value.yourname;
   this.b =  data.value.yourpass;

   this.http.post(this.url, {
    "Name": data.value.yourname,
    "Password": data.value.yourpass
  }).subscribe(d=> {this.msg = d});


  }

 
}
