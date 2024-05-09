import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  private lineas:any = []
  private empresas:any = []

  private url = "http://127.0.0.1:8000/api"

  constructor(private http:HttpClient) {
    http.get(this.url + "/linea").subscribe(json => {
      this.lineas = json
    })
    http.get(this.url + "/empresa").subscribe(json => {
      this.empresas = json
    })
  }

  getLineas() {
    return this.lineas
  }

  getEmpresas() {
    return this.empresas
  }

}
