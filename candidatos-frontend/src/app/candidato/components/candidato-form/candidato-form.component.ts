// src/app/candidato/candidato-form.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CandidatoService } from '../../candidato.service';
import { Candidato } from '../../candidato.model';
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
  templateUrl: './candidato-form.component.html',
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
