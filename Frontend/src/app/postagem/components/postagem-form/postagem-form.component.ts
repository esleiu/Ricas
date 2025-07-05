import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostagemService } from '../../postagem.service';
import { Postagem } from '../../postagem.model';
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
  selector: 'app-postagem-form',
  standalone: true,
  styleUrls: ['./postagem-form.component.css'],
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
  templateUrl: './postagem-form.component.html',
})
export class PostagemFormComponent {
  postagem: Postagem = {
    autora: '',
    conteudo: '',
    resumo: '',
    categoria:'',
    dataPublicacao: '',
    curtidas: 0,
    emDestaque: false
  };

  id?: number;

  constructor(private route: ActivatedRoute, private service: PostagemService, private router: Router) {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.id = Number(param);
      this.service.obter(this.id).subscribe(p => (this.postagem = p));
    }
  }

  salvar() {
    if (this.id) {
      this.service.atualizar(this.id, this.postagem).subscribe(() => this.router.navigate(['/']));
    } else {
      this.service.criar(this.postagem).subscribe(() => this.router.navigate(['/']));
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
