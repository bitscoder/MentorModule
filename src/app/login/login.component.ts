import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ User} from './user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel=new User('','')
  
  constructor(private router: Router) {
    
   }
  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log(this.userModel);
    if(this.userModel.username=="John"&& this.userModel.password=="John@123"){
      alert("GREAT SUCCESS");
    }else{
      alert("SORRY");
    }
  }

}
