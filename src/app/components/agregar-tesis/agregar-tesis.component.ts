import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { Tesis } from 'src/app/models/tesis.model';
import { TesisService } from 'src/app/services/tesis.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-agregar-tesis',
  templateUrl: './agregar-tesis.component.html',
  styleUrls: ['./agregar-tesis.component.css']
})
export class AgregarTesisComponent implements OnInit {

  lstAlumno:Alumno[] = [];
  objTesis:Tesis = {
    alumno:{
      idAlumno:-1
    }
  };

  constructor(private utilService:UtilService, private tesisService:TesisService) {
      this.utilService.listaAlumno().subscribe(
        x => this.lstAlumno = x
      );
  }

  registraTesis(){
    this.tesisService.registraTesis(this.objTesis).subscribe(
      x => alert(x.errores)
    );
  }

  ngOnInit(): void {
  }

}
