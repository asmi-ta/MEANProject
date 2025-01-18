import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  name:any;
  pass:any;
  msg:any;
  url: string = "http://localhost:5000/Update";

  constructor(private http:HttpClient){}

  delete(data:any){
    this.name=data.value.yourname,
    this.pass=data.value.yourpass


    this.http.post(this.url, {
      "Name": this.name,
      "Password": this.pass
    }).subscribe(d=> {this.msg = d});



  }

}
