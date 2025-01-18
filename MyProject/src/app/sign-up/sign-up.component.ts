import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './sign-up.component.html',
  // styleUrl: './sign-up.component.css'
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
a:any
b:any
c:any;

url: string = "http://localhost:5000/";
msg:any
constructor(private http:HttpClient){}

// data is variable and any is datatype, any means you can store number and string both
  save(data:any){
    this.a=data.value.yourname
    this.b=data.value.youradd
    this.c=data.value.yourpass



    // post api (application program interface) to save data in databse

    // this.http.post(this.url,{"Name":data.value.yourname,"Address":data.value.youradd,"Password":data.value.yourpass})
    // .subscribe(d=>{this.msg=d})

    this.http.post(this.url, {
      "Name": data.value.yourname,
      "Address": data.value.youradd,
      "Password": data.value.yourpass
    }).subscribe(d=> {this.msg = d});
  }
}


// typescript == javascript