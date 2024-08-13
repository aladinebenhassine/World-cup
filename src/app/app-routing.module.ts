import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchComponent } from './match/match.component';
import {SimilarplayerComponent} from "./similarplayer/similarplayer.component";

const routes: Routes = [
  { path: 'match', component: MatchComponent,pathMatch: 'full' },
  { path: 'similarplayer', component: SimilarplayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
