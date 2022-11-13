import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Proveedor } from '../models/proveedor.model';

const baseUrlProveedor = AppSettings.API_ENDPOINT + '/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  registraProveedor(obj: Proveedor): Observable<any> {
    return this.http.post(baseUrlProveedor, obj);
  }

  listaProveedor(razonsocial: string, ruc: string, estado: number, idPais: number): Observable<any> {
    const params = new HttpParams().set("razonsocial", razonsocial).set("ruc", ruc).set("estado", estado).set("idPais", idPais);
    return this.http.get(baseUrlProveedor + "/listaProveedorConParametros", { params });
  }

}
