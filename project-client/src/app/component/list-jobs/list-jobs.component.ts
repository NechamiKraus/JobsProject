import { Component } from '@angular/core';
import { JoServiceService } from '../../services/jo-service.service';
import { job } from '../../models/job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrl: './list-jobs.component.scss'
})
export class ListJobsComponent {

  constructor(private jobservice: JoServiceService, private router: Router) { }

  joblist: job[] = []
  ngOnInit() {
    this.jobservice.getListJob().subscribe(res => { this.joblist = res; })
  }

  showJob(name: string): void {
    this.router.navigate(['jobs', 'job'], { queryParams: { jobName: name } })

  }
  selectedOption: string = ""

  flagArea: boolean = false
  flagFiled: boolean = false
  filteredJobs: job[] = [];

  filterArea() {
    this.flagArea = true
    this.flagFiled = false
  }
  filterFiled() {
    this.flagFiled = true
    this.flagArea = false
  }
  filter: boolean = false
  chooseOnSelect() {
    this.filter = true
    console.log(this.selectedOption)
    this.jobservice.getListJob()?.subscribe(
      (alljobs: job[]) => {
        this.filteredJobs = alljobs.filter((j) => j.type === this.selectedOption || j.area === this.selectedOption);
        console.log(this.filteredJobs);
      },
      (Error: any) => {
        alert('נתונים שגויים')
      });

  }
}
