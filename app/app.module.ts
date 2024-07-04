import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { RegisterationComponent } from './registeration/registeration.component';
import { UtilityService } from './utility.service';
import { AppRoutingModule } from './app-routing.module';
import { InsertmovieComponent } from './insertmovie/insertmovie.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { HomeComponent } from './home/home.component';
import { AhomeComponent } from './user_review/ahome.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { UhomeComponent } from './uhome/uhome.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { DisplaymovieComponent } from './displaymovie/displaymovie.component';
import { FullDetailComponent } from './full-detail/full-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    InsertmovieComponent,
    UpdatemovieComponent,
    HomeComponent,
    AhomeComponent,
    UloginComponent,
    UhomeComponent,
    DeletemovieComponent,
    DisplaymovieComponent,
    FullDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
