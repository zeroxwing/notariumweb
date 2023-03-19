import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../model/user";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
  constructor(private route:ActivatedRoute) {
  }
  name:object = []
  ngOnInit():void {
    this.route.queryParams.subscribe(params=>{
      const user : User = {
        id:params['id'],
        firstname:params['firstname'],
        lastname:params['lastname'],
        username:params['username'],
        passwd:params['passwd'],
        profile:params['profile']
      }
      console.log(user)
    })
  }
}
