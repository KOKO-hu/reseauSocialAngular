import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup
  constructor(private fb:FormBuilder , private userService:UserService, private route: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      email: ["", Validators.required],
      mdp: ["", Validators.required]
    }
      
    )
  }
  login() {
    console.log(this.loginFormGroup.value)
    this.userService.login(this.loginFormGroup.value).subscribe((data) => {
     this.userService.saveToken(data.token)
    })
  }
}
