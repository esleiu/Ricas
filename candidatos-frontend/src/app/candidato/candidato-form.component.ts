// src/app/candidato/candidato-form.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CandidatoService } from './candidato.service';
import { Candidato } from './candidato.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-candidato-form',
  standalone: true,
  styleUrls: ['./candidato-form.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule
  ],
  template: `
    <nz-card nzTitle="{{ id ? 'Editar' : 'Novo' }} Candidato" [nzBordered]="true">
  <form (ngSubmit)="salvar()" nz-form [nzLayout]="'vertical'">
    <nz-form-item>
      <nz-form-label>Nome</nz-form-label>
      <nz-form-control>
        <input nz-input [(ngModel)]="candidato.nome" name="nome" required />
      </nz-form-control>
    </nz-form-item>

    <nz-form-item>
      <nz-form-label>Email</nz-form-label>
      <nz-form-control>
        <input nz-input [(ngModel)]="candidato.email" name="email" required type="email" />
      </nz-form-control>
    </nz-form-item>

    <nz-form-item>
      <nz-form-label>Telefone</nz-form-label>
      <nz-form-control>
        <input nz-input [(ngModel)]="candidato.telefone" name="telefone" />
      </nz-form-control>
    </nz-form-item>

    <nz-form-item>
      <nz-form-label>Data de nascimento</nz-form-label>
      <nz-form-control>
        <input nz-input [(ngModel)]="candidato.data_nascimento" name="data_nascimento" type="date" />
      </nz-form-control>
    </nz-form-item>

    <nz-form-item>
      <nz-form-label>Idade</nz-form-label>
      <nz-form-control>
        <input nz-input [(ngModel)]="candidato.idade" name="idade" required type="number" />
      </nz-form-control>
    </nz-form-item>

    <nz-form-item>
      <nz-form-label>Disponível para contratação</nz-form-label>
      <nz-form-control>
        <label nz-checkbox [(ngModel)]="candidato.disponivel" name="disponivel">Sim</label>
      </nz-form-control>
    </nz-form-item>

    <nz-form-item>
      <nz-form-label>Resumo profissional</nz-form-label>
      <nz-form-control>
        <textarea nz-input [(ngModel)]="candidato.resumo" name="resumo"></textarea>
      </nz-form-control>
    </nz-form-item>

    <nz-form-item>
      <nz-form-label>Experiência profissional</nz-form-label>
      <nz-form-control>
        <textarea nz-input [(ngModel)]="candidato.experiencia" name="experiencia"></textarea>
      </nz-form-control>
    </nz-form-item>

    <div class="botoes">
      <button nz-button nzType="primary" type="submit">
        <span nz-icon nzType="save"></span> Salvar
      </button>
      <button nz-button type="button" (click)="voltar()">
        <span nz-icon nzType="arrow-left"></span> Voltar
      </button>
    </div>
  </form>
</nz-card>

  `,
})
export class CandidatoFormComponent {
  candidato: Candidato = { nome: '', email: '', idade: 0, disponivel: true };
  id?: number;

  constructor(private route: ActivatedRoute, private service: CandidatoService, private router: Router) {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.id = Number(param);
      this.service.obter(this.id).subscribe(c => (this.candidato = c));
    }
  }

  salvar() {
    if (this.id) {
      this.service.atualizar(this.id, this.candidato).subscribe(() => this.router.navigate(['/']));
    } else {
      this.service.criar(this.candidato).subscribe(() => this.router.navigate(['/']));
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
