import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../projet.service'
import { Router } from '@angular/router'
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  exist:any
  users: User[]
  form: FormGroup;

  constructor(private _auth: ProjetService, private _router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
  
  loginUser (Email: string,Password:string) {
    this._auth
      .getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
        this.users.forEach(n => {
          if(n.email == Email && n.password == Password )
          {
            console.log(n.type)
            if(n.type == 'Vendeur'){this.exist = 1}
            else if (n.type == 'Client'){this.exist = 2}
            else if(n.type == 'Admin'){this.exist = 3}
          } 
        });

        if(this.exist==1){
          alert("Welcome Vendeur");
          this._router.navigate(['/app-vendeur'])
        }
        else if (this.exist==2) {
          alert("Welcome Client");
          this._router.navigate(['/app-senhaji'])
        } 
        else if (this.exist==3) {
          alert("Welcome Admin");
          this._router.navigate(['/app-admin'])
        }
        else{
          alert("Email or Password Incorrect");
        }
        this.exist = 0
      });
      
      
      
    
  }

}
