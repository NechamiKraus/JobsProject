import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { ListJobsComponent } from './component/list-jobs/list-jobs.component';
import { JobComponent } from './component/job/job.component';

const routes: Routes =[
{path :'main' ,component:MainComponent},
{path :'login',component:LoginComponent},
{path :'jobs' ,component:ListJobsComponent ,children:[
{path : 'job', component:JobComponent}
]},
{path : 'jobs' ,component:ListJobsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
