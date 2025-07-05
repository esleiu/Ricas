import { Routes } from '@angular/router';
import { PostagemListComponent } from './postagem/components/postagem-list/postagem-list.component';
import { PostagemFormComponent } from './postagem/components/postagem-form/postagem-form.component';
import { PostagemDetailComponent } from './postagem/components/postagem-detail/postagem-detail.component';

export const routes: Routes = [
  { path: '', component: PostagemListComponent },
  { path: 'nova', component: PostagemFormComponent },
  { path: 'editar/:id', component: PostagemFormComponent },
  { path: 'detalhar/:id', component: PostagemDetailComponent },
  { path: '**', redirectTo: '' }
];
