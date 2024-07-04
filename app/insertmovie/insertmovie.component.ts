import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Import your AuthService

@Component({
  selector: 'app-insertmovie',
  templateUrl: './insertmovie.component.html',
  styleUrl: './insertmovie.component.css'
})
export class InsertmovieComponent {
  msg:string='';
  constructor(private util:UtilityService,private router: Router,private authService: AuthService){}

  onSubmit(form: any){
    if (form.valid){
    this.util
    .insertmovie(form.value.m_name, form.value.year, form.value.gener, form.value.lang, form.value.rate, form.value.native, form.value.description, form.value.type)
    .subscribe((data) => {
      if (data.status) this.msg = data.message;
    });
  
  }
  else
{
  alert("please fill all the fields");

}
}
logout(){
localStorage.removeItem("user");
this.router.navigateByUrl('/home');
}
}