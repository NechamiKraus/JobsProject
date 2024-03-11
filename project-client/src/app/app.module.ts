import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ListJobsComponent } from './component/list-jobs/list-jobs.component';
import { JobComponent } from './component/job/job.component';
import { ImageStylePipe } from './img.pipe';

// import { CommonModule } from '@angular/common';}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ListJobsComponent,
    JobComponent,
    ImageStylePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
