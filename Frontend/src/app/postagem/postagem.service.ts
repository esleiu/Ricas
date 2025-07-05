import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from './postagem.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostagemService {
  private apiUrl = 'https://curly-enigma-694v99j7qvxv355vw-8000.app.github.dev/api/postagens/';

  constructor(private http: HttpClient) {}

  listar(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(this.apiUrl);
  }

  obter(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`${this.apiUrl}${id}/`);
  }

  criar(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(this.apiUrl, postagem);
  }

  atualizar(id: number, postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(`${this.apiUrl}${id}/`, postagem);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
