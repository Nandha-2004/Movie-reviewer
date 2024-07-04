import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {
  msg:string='';
  constructor(private util:UtilityService){}

  onSubmit(form: any){
    if (form.valid){
    this.util
      .insertuser(form.value.username, form.value.phno, form.value.email, form.value.pwd )
      .subscribe((data) => {
        if (data.status) this.msg = data.message;
      
      });
    }
    else {
      // Handle form validation errors
      alert("please fill all the fields");
    } 
  }
}
 