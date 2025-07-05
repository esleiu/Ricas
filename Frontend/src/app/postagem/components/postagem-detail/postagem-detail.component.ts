import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostagemService } from '../../postagem.service';
import { Postagem } from '../../postagem.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postagem-detail',
  standalone: true,
  styleUrls: ['./postagem-detail.component.css'],
  imports: [CommonModule, RouterModule],
  templateUrl: './postagem-detail.component.html',
})
export class PostagemDetailComponent {
  postagem?: Postagem;

  constructor(
    private route: ActivatedRoute,
    private service: PostagemService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.obter(id).subscribe(p => (this.postagem = p));
  }

  voltar() {
    history.back();
  }
}
