import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { user } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {  

   constructor(private userService : UserServiceService ){}

   flag? : boolean
    saveUserConnected(userPassword:string,userName:string){
    console.log(userName)
      if( userPassword.length < 8 || userPassword.indexOf(' ')>0 ){
        alert('סיסמה קצרה מידי!!')
      }
      else{
          this.userService.getUser(userPassword,userName)?.subscribe(
          (user : user)=>{
            localStorage.setItem("userConnected",JSON.stringify(user))
            localStorage.setItem("nameUserConnected" , JSON.stringify(user.userName))
            this.flag = true
          },
          (Error : any)=>{
            alert('נתונים שגויים')
          }
          )
      }
   
   }


}
