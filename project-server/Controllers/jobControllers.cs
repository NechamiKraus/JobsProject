using Microsoft.AspNetCore.Mvc;

namespace projectServer.Controllers;

[ApiController]
[Route("[controller]")]
public class jobControler : ControllerBase
{
    private List<job> listJobs;

    public jobControler()
    {
        listJobs = new List<job> 
        {
            new job {jobName = "Elementary school teacher" , type = enumJob.TEACHERS.ToString(), numHours= 40, area= "North", requirements ="", jobHome = false},
            new job {jobName = "ESL teacher" , type = enumJob.TEACHERS.ToString(), numHours= 24, area= "South", requirements ="", jobHome = true},
            new job {jobName = "Special education teacher" , type = enumJob.TEACHERS.ToString(), numHours= 47, area= "Jerusalem", requirements ="", jobHome = false},
            new job {jobName = "Statistician" , type = enumJob.MATH.ToString(), numHours= 50, area= "Jerusalem", requirements ="", jobHome = false},
            new job {jobName = "Mathematics researcher" , type = enumJob.MATH.ToString(), numHours= 34, area= "South", requirements ="", jobHome = false},
            new job {jobName = "High school math teacher" , type = enumJob.MATH.ToString(), numHours= 50, area= "Jerusalem", requirements ="", jobHome = false},
            new job {jobName = "Software key" , type = enumJob.COMPUTERS.ToString(), numHours= 65, area= "South", requirements ="", jobHome = true},
            new job {jobName = "UX/UI designer" , type = enumJob.COMPUTERS.ToString(), numHours= 70, area= "Jerusalem", requirements ="", jobHome = false},
            new job {jobName = "Bookkeeper" , type = enumJob.COMPUTERS.ToString(), numHours= 80, area= "North", requirements ="", jobHome = true},

        };
    }
    [HttpGet(Name = "getListJob")]
    public List<job> Get()
    {
        return listJobs;
    }
    
}
