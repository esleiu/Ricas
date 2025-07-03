import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Candidato } from '../../candidato.model';
import { CandidatoService } from '../../candidato.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-candidato-list',
  standalone: true,
  styleUrls: ['./candidato-list.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    NzTableModule,
    NzButtonModule,
  ],
  templateUrl: './candidato-list.component.html',

})
export class CandidatoListComponent {
  candidatos: Candidato[] = [];

  constructor(private service: CandidatoService) {
    this.service.listar().subscribe(data => this.candidatos = data);
  }

  remover(id?: number) {
    if (!id) return;
    this.service.deletar(id).subscribe(() => {
      this.candidatos = this.candidatos.filter(c => c.id !== id);
    });
  }
}
