import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { JoServiceService } from '../../services/jo-service.service';
import { user } from '../../models/user';
import { job } from '../../models/job';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private jobService: JoServiceService , private userservice : UserServiceService) { }
 currentDate = new Date
  userNameConnected: string | null  = ""
  jobUserConnected : string | null = ""
  passUserConnected: string | null = ""

  userConnected = localStorage.getItem("userConnected");

  showUserConnected(): void {
    if (this.userConnected != null) {

      let object: user = JSON.parse(this.userConnected)
      this.userNameConnected = object.userName
      this.jobUserConnected = object.jobSearchField
    }
  }
  filteredJobs : job[] = []
  flag! : boolean
  filterJobs() : void{
    this.flag = true
    this.jobService.getListJob()?.subscribe(
      (alljobs: job[]) => {
       this.filteredJobs = alljobs.filter((j) => j.type === this.jobUserConnected);
        console.log(this.filteredJobs);
      },
      (Error: any) => {
        alert('נתונים שגויים')
      });
  }

  object = {
    userName: "shoshi",
    password: "12345678",
    id: 5,
    jobSearchField: "MATH",
    cv: []
  };

  showNumOfCV: number = 0;

  showNumCV() {
    if (this.userConnected != null) {
      this.object = JSON.parse(this.userConnected);
      console.log(this.object);
      this.userservice.getUser(this.object?.password, this.object?.userName)?.subscribe(
        (user: any) => {
          if (user && user.cv) {
            this.showNumOfCV = user.cv.length; 
          } else {
            this.showNumOfCV = 0; 
          }
        },
        (error: any) => {
          alert('Invalid data');
        }
      );
    }
  }

  ngOnInit(): void {
    this.showUserConnected();
    this.showNumCV();

  }
  


}
