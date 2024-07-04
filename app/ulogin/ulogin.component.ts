import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrl: './ulogin.component.css'
})
export class UloginComponent {
  msg: string = '';

  constructor(private util: UtilityService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid){
    this.util.ulogin(form.value.email, form.value.pwd)
      .subscribe((data) => {
        if (data.status) {
          this.msg = data.message;
          localStorage.setItem('user',form.value.email);
          this.router.navigate(['/uhome']); // Assuming '/home' is the path to your home component
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
