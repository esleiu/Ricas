import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CandidatoService } from './candidato.service';
import { Candidato } from './candidato.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidato-detail',
  standalone: true,
  styleUrls: ['./candidato-detail.component.css'],
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h2>Detalhes do Candidato</h2>
      <div *ngIf="candidato" class="card-detalhes">
        <p><strong>Nome:</strong> {{ candidato.nome }}</p>
        <p><strong>Email:</strong> {{ candidato.email }}</p>
        <p><strong>Telefone:</strong> {{ candidato.telefone }}</p>
        <p><strong>Data Nasc.:</strong> {{ candidato.data_nascimento }}</p>
        <p><strong>Idade:</strong> {{ candidato.idade }}</p>
        <p><strong>Disponível:</strong> {{ candidato.disponivel ? 'Sim' : 'Não' }}</p>
        <p><strong>Resumo:</strong> {{ candidato.resumo }}</p>
        <p><strong>Experiência:</strong> {{ candidato.experiencia }}</p>
      </div>

      <button class="voltar-btn" (click)="voltar()">Voltar</button>
    </div>
  `,
})
export class CandidatoDetailComponent {
  candidato?: Candidato;

  constructor(
    private route: ActivatedRoute,
    private service: CandidatoService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.obter(id).subscribe(c => (this.candidato = c));
  }

  voltar() {
    history.back();
  }
}
