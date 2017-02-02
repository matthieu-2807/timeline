import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {emailverification, passwordverification} from '../Validators/accountVerification.validator';

@Component({
  selector: 'app-login',
  templateUrl: `app/login/login.component.html`,
  styles: ['#email.ng-valid, #password.ng-valid{border-color:green;} #email.ng-invalid, #password.ng-invalid{border-color:red;}'],
})

export class LoginComponent implements OnInit {
    formLogin: FormGroup;
    email: FormControl;
    password: FormControl;

    constructor(private formBuilder:FormBuilder){

    }

    ngOnInit(){
        this.email = new FormControl('',[Validators.required, emailverification]);
        this.password = new FormControl('',[Validators.required, passwordverification]);
        this.formLogin = this.formBuilder.group({
            emailAccount: this.email,
            passwordAccoun: this.password
        })
    }

    seConnecter(){
        
    }

}