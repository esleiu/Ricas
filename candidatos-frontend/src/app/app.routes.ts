// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { CandidatoListComponent } from './candidato/components/candidato-list/candidato-list.component';
import { CandidatoFormComponent } from './candidato/components/candidato-form/candidato-form.component';
import { CandidatoDetailComponent } from './candidato/components/candidato-detail/candidato-detail.component';

export const routes: Routes = [
  { path: '', component: CandidatoListComponent },
  { path: 'novo', component: CandidatoFormComponent },
  { path: 'editar/:id', component: CandidatoFormComponent },
  { path: 'detalhes/:id', component: CandidatoDetailComponent },
];
