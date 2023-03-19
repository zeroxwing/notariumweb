import {Component} from '@angular/core';
import {UserserviceService} from "../../services/userservice.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserserviceService]
})
export class LoginComponent {
  hide = true;
  constructor(private service:UserserviceService, private router:Router) {
  }

  login(user:String, passwd:String){
    this.service.login(user, passwd)
      .subscribe(obj=>{
        if(obj != null){
          this.router.navigate(['/', 'home'], {queryParams:obj, skipLocationChange:true})
        }
      })
  }
}
