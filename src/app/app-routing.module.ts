import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HeadingsComponent } from './headings/headings.component';
import { GalleryComponent } from './gallery/gallery.component';
const routes: Routes = [
  { path: 'card', component: CardComponent },
  {
    path: '', component: HeadingsComponent 
  },
  {
    path:'gallery', component:GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
