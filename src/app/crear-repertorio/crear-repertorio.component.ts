import { Component } from '@angular/core';
import {Deed} from "../../model/deed";
import {DeedserviceService} from "../../services/deedservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-repertorio',
  templateUrl: './crear-repertorio.component.html',
  styleUrls: ['./crear-repertorio.component.css'],
  providers: [DeedserviceService]
})
export class CrearRepertorioComponent {
  constructor(private service:DeedserviceService, private router:Router) {
  }
  crear(ad:String, parts:String, lawyers:String, contract:String, pd:String, content:String,
  tp:String, tw:String, rn:String, dni:String){
    const deed:Deed = {
      anotationDate:ad,
      parts:parts,
      lawyers:lawyers,
      contractAct:contract,
      presentationDate:pd,
      content:content,
      totalPages:tp,
      totalWrites:tw,
      requestName:rn,
      dni:dni
    }
    this.service.post(deed)
      .subscribe(data=>{
        console.log(data)
        this.router.navigate(['/','listar-repertorios'])
      })
  }
}
