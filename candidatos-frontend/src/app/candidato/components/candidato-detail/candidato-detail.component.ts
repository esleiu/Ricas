import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CandidatoService } from '../../candidato.service';
import { Candidato } from '../../candidato.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidato-detail',
  standalone: true,
  styleUrls: ['./candidato-detail.component.css'],
  imports: [CommonModule, RouterModule],
  templateUrl: './candidato-detail.component.html',
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
