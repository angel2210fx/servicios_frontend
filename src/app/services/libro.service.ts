import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Libro } from '../models/libro.model';

const baseUrlLibro = AppSettings.API_ENDPOINT+ '/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor( private http:HttpClient) { }


  registraLibro(obj:Libro):Observable<any>{
    return this.http.post(baseUrlLibro,obj)
  }


  consultaLibro(titulo:string, serie:string, idCategoria: number, estado: number): Observable<any>{

    const params = new HttpParams().set("titulo", titulo).set("serie", serie).set("idCategoria", idCategoria).set("estado", estado);  

    return this.http.get(baseUrlLibro + "/listaLibrosParametros", {params});
  }


}
