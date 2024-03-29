import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopyClipboardComponent } from './copy-clipboard/copy-clipboard.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LearnFacadeComponent } from './learn-facade/learn-facade.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'rxjs', component: LearnRxjsComponent },
  { path: 'facade', component: LearnFacadeComponent },
  { path: 'clipboard', component: CopyClipboardComponent },
  { path: 'dropdown', component: DropdownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
