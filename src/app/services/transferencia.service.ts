import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
private url = "http://localhost:3000/transferencias";

constructor(private httpClient: HttpClient) {}

 todas(): Observable<Transferencia[]>{
   return this.httpClient.get<Transferencia[]>(this.url)
 }

 adicionar(transferencias: Transferencia): Observable<Transferencia> {
  this.hidratar(transferencias);

  return this.httpClient.post<Transferencia>(this.url, transferencias)

 }

 private hidratar(transferencias: any) {
   transferencias.data = new Date();
 }

 remover(transferencias: Transferencia): Observable<Transferencia> {
   return this.httpClient.delete<Transferencia>(this.url + "/" + transferencias.id)
 }

}
