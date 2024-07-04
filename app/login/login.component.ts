import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg: string = '';
  constructor(private util: UtilityService, private router: Router) {
    localStorage.removeItem("user");

   }

  onSubmit(form: NgForm) {
    if (form.valid){
    this.util.login(form.value.email, form.value.pwd)
      .subscribe((data) => {
        if (data.status) {
          this.msg = data.message;
          // Redirect to home component
          localStorage.setItem('user',form.value.email);
          this.router.navigate(['/insertmovie']); // Assuming '/home' is the path to your home component
        } else {
          this.msg = data.message;
        }
      });
    }
      else{
        alert("please fill all the fields");
      }
    }
  }
