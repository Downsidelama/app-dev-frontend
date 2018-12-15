import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  message: string;
  hidePassword = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    const success = true;

    if(success) {
      const url = '/';
      this.router.navigate([url]);
    } else {
      this.message = 'Login failed!';
    }
  }

}
