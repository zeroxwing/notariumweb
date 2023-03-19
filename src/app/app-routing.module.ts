import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MenuComponent} from "./menu/menu.component";
import {PageComponent} from "./page/page.component";
import {CrearRepertorioComponent} from "./crear-repertorio/crear-repertorio.component";
import {ListarRepertoriosComponent} from "./listar-repertorios/listar-repertorios.component";


const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path: 'home', component:PageComponent},
  { path: 'crear-repertorio', component:CrearRepertorioComponent},
  { path: 'listar-repertorios', component:ListarRepertoriosComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, MenuComponent, PageComponent]
