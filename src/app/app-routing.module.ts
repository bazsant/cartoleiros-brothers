import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubesModule } from './clubes/clubes.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegrasModule } from './regras/regras.module';
import { RodadasModule } from './rodadas/rodadas.module';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "clubes", loadChildren: () => ClubesModule },
  { path: "regras", loadChildren: () => RegrasModule },
  { path: "rodadas", loadChildren: () => RodadasModule },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
