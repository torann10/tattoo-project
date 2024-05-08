import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    }),
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
  });

  constructor(private location: Location, private authService: AuthService) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.authService.signup(this.registerForm.get('email')?.value as string, this.registerForm.get('password')?.value as string).then(cred => {
      console.log(cred);
    }).catch(error => {
      console.error(error);
    })
    
  }

  onBack() {
    this.location.back();
  }


}

