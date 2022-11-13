import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Alumno } from '../models/alumno.model';

const baseUrlAlumno = AppSettings.API_ENDPOINT+ '/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http : HttpClient) { }

  registroAlumno(data: Alumno): Observable<any>{
    return this.http.post(baseUrlAlumno, data)
  }

  consultaAlumno(nombre:string, apellido:string, dni:string, idPais: number, estado: number): Observable<any>{

    const params = new HttpParams().set("nombre", nombre).set("apellido", apellido).set("dni", dni).set("idPais", idPais).set("estado", estado);  

    return this.http.get(baseUrlAlumno + "/listaAlumnoConParametros", {params});

  }
}
