import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { InsertmovieComponent } from './insertmovie/insertmovie.component';
import { HomeComponent } from './home/home.component';
import { AhomeComponent } from './user_review/ahome.component';
import { UhomeComponent } from './uhome/uhome.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { DisplaymovieComponent } from './displaymovie/displaymovie.component';
import { FullDetailComponent } from './full-detail/full-detail.component';
import { loginGuard } from './login.guard';
import { uloginGuard } from './login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to login component
  {path:'registeration', component:RegisterationComponent},
  {path:'login', component:LoginComponent},
  {path:'insertmovie', component:InsertmovieComponent, canActivate:[loginGuard]},
  {path:'home', component:HomeComponent},
  {path:'ahome', component:AhomeComponent},
  {path:'uhome', component:UhomeComponent,canActivate:[uloginGuard]}, 
  {path:'ulogin', component:UloginComponent},
  {path:'updatemovie', component:UpdatemovieComponent, canActivate:[loginGuard]},
  {path:'deletemovie', component:DeletemovieComponent, canActivate:[loginGuard]},
  {path:'displaymovie', component:DisplaymovieComponent, canActivate:[uloginGuard]},
  { path: 'full-detail', component: FullDetailComponent,canActivate:[uloginGuard]} 

  // Add more routes as needed
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
