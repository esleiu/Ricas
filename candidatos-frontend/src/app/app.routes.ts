// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { CandidatoListComponent } from './candidato/candidato-list.component';
import { CandidatoFormComponent } from './candidato/candidato-form.component';
import { CandidatoDetailComponent } from './candidato/candidato-detail.component';

export const routes: Routes = [
  { path: '', component: CandidatoListComponent },
  { path: 'novo', component: CandidatoFormComponent },
  { path: 'editar/:id', component: CandidatoFormComponent },
  { path: 'detalhes/:id', component: CandidatoDetailComponent },
];
