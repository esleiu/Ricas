import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { Postagem } from '../../postagem.model';
import { PostagemService } from '../../postagem.service';

@Component({
  selector: 'app-postagem-list',
  templateUrl: './postagem-list.component.html',
  styleUrls: ['./postagem-list.component.css'],
  standalone: true,  
  imports: [
    CommonModule,   
    RouterModule,   
    FormsModule,    
    NzTableModule,   
    NzButtonModule, 
  ],
})
export class PostagemListComponent implements OnInit {
  postagens: Postagem[] = [];

  constructor(private postagemService: PostagemService) {}

  ngOnInit(): void {
    this.postagemService.listar().subscribe({
      next: (data) => {
        this.postagens = data;
      },
      error: (err) => {
        console.error('Erro ao buscar postagens', err);
      },
    });
  }

  remover(id: number): void {
    this.postagemService.deletar(id).subscribe({
      next: () => {
        this.postagens = this.postagens.filter((p) => p.id !== id);
      },
      error: (err) => {
        console.error('Erro ao deletar postagem', err);
      },
    });
  }
}
