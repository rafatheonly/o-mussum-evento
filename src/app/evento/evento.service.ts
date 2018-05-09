import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventoService {

  //eventosUrl = 'http://localhost:8080/eventos';  
  eventosUrl = 'ec2-54-204-39-46.compute-1.amazonaws.com/eventos';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.eventosUrl);
  }
}
