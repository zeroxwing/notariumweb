import {Component, OnInit} from '@angular/core';
import {DeedserviceService} from "../../services/deedservice.service";

@Component({
  selector: 'app-listar-repertorios',
  templateUrl: './listar-repertorios.component.html',
  styleUrls: ['./listar-repertorios.component.css'],
  providers: [DeedserviceService]
})
export class ListarRepertoriosComponent implements OnInit{
  data = []
  displayedColumns : string[] = ['numeroRepertorio', 'anotationDate', 'parts', 'lawyers', 'contractAct',
    'presentationDate', 'content', 'totalPages', 'totalWrites', 'requestName', 'dni']
  constructor(private service:DeedserviceService) {
  }
  ngOnInit():void {
    this.service.getAll()
      .subscribe(obj=>{
        this.data = obj
        console.log(this.data)
      })
  }
}
