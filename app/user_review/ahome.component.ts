import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrl: './ahome.component.css'
})
export class AhomeComponent {
  msg:string="";
  constructor(private util:UtilityService,private router: Router,) { }

  onSubmit(form: any){
    this.util
    .userreview(form.value.m_name, form.value.year, form.value.gener,form.value.description)
    .subscribe((data) => {
      if (data.status) this.msg = data.message;
    });
  
}
logout(){
  localStorage.removeItem("user");
  this.router.navigateByUrl('/home');
}
}

