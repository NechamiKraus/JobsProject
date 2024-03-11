import { Component, OnInit } from '@angular/core';
import { JoServiceService } from '../../services/jo-service.service';
import { job } from '../../models/job';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { user } from '../../models/user';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent implements OnInit {

  constructor(private jobService: JoServiceService, private userservice: UserServiceService, private ar: ActivatedRoute) { }
  joblist: job[] = []
  jobData: job = { jobName: "TEACHERS", type: "TEACHERS", numHours: 40, area: "north", requirements: "", jobHome: true }
  data? : job

  ngOnInit() {
    this.ar.queryParams.subscribe(o => {
      let name = o['jobName']
      this.jobService.getListJob().subscribe(res => { this.joblist = res; })
      this.joblist.forEach(element => {
        if (element.jobName === name) {
          this.jobData = element
          this.data = element
        }
      });
    })
  }
  connected: user | null = JSON.parse(localStorage.getItem("userConnected") || "null");
  name: string = this.connected && this.connected.userName ? this.connected.userName : "";
  pass: string = this.connected && this.connected.password ? this.connected.password : "";
 
  sendCV() {
   alert("הקוח נשלח בהצלחה")
    if (this.connected) {
    this.userservice.pushCV(this.jobData , this.pass ,this.name)
      .subscribe((res) => {
          if (!res) {
            console.log("not valid!!!!")
          }
          else {
            this.connected = res; // Update the connected user object
            localStorage.setItem("userConnected", JSON.stringify(res));
            location.reload();
          }
        });
    }
    else
    console.log("user not connected");
  }

}


