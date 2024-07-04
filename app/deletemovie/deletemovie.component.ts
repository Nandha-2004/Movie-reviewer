import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrl: './deletemovie.component.css'
})
export class DeletemovieComponent {
  msg:string='';
  constructor(private util:UtilityService,private router: Router){}
  

  onSubmit(form: NgForm){
    if (form.valid){
    this.util
    .deletemovie(form.value.m_name)
    .subscribe((data) => {
       if (data.status) {
            this.msg = data.message;
            // Redirect to home component
          } else {
            this.msg = data.message;
          }
    });
  }
else{
  alert("please fill all the fields");
}
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigateByUrl('/home');
  }
}
