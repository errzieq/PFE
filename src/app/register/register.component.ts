import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../projet.service'
import { Router } from '@angular/router'
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  exist:any
  users: User[]
  form: FormGroup;
  constructor(private _auth: ProjetService,private _router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required,Validators.minLength(6)]],
      username: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      address: [null, Validators.required],
      num_phone: [null, Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required],
      type: [null, Validators.required],
    });
  }

  registerUser(Username: string , Email: string,Password:string,Address:string , Num_phone:string , City:string , Country:string ,Firstname:string,Lastname:string,Type:string) {
    
    Email = Email.trim()
    Password= Password.trim()
    Username= Username.trim()

    this._auth
      .getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
        this.users.forEach(n => {
          if(n.email == Email)
          {
            this.exist = 1
            
          }
          
        });
           if(this.exist == 1){
            alert("Email Already Exist");
            
           }
           else{

           
          const newTask: User = { userId: this.users.length + 1 ,username:Username , email:Email,password:Password , address:Address , num_phone:Num_phone , city:City , country:Country,firstname:Firstname,lastname:Lastname,type:Type} as User
          this._auth.addUser(newTask).subscribe(() => this._auth.getUsers())
        }
        this.exist = 0
  
        });

}
}
