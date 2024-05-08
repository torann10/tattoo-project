import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


  email = new FormControl('');
  password = new FormControl('');

  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    
  }

  async login() {
    this.loading = true;
    // if (this.email.value === 'test@gmail.com' && this.password.value === 'testpw') {
    //   this.router.navigateByUrl('/main');
    // } else {
    //   console.error('Incorrect email or password!');
    // }

    this.authService.login(this.email.value as string, this.password.value as string).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/main');
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
    })
  }

}
