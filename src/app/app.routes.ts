import { Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { UnidadesComponent } from './unidades/unidades.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "servicos", component: ServicosComponent},
    {path: "unidades", component: UnidadesComponent},
    {path: "contato", component: ContatoComponent},
];