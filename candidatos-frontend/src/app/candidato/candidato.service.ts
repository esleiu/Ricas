// src/app/candidato/candidato.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidato } from './candidato.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CandidatoService {
  private apiUrl = 'http://localhost:8000/api/candidatos/';


  constructor(private http: HttpClient) {}

  listar(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.apiUrl);
  }

  obter(id: number): Observable<Candidato> {
    return this.http.get<Candidato>(`${this.apiUrl}${id}/`);
  }

  criar(candidato: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(this.apiUrl, candidato);
  }

  atualizar(id: number, candidato: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(`${this.apiUrl}${id}/`, candidato);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
