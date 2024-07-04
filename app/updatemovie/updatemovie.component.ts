import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrl: './updatemovie.component.css'
})
export class UpdatemovieComponent {
  msg:string='';
  constructor(private util:UtilityService,private router: Router){}

  onSubmit(form: any){
    if (form.valid){
    this.util
    .updatemovie(form.value.m_name, form.value.year, form.value.gener, form.value.lang, form.value.rate, form.value.native, form.value.description, form.value.type)
    .subscribe((data) => {
      if (data.status) this.msg = data.message;
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