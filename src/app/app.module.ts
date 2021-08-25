import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupedItemComponent } from './grouped-item/grouped-item.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { MenuComponent } from './menu/menu.component';
import { LearnFacadeComponent } from './learn-facade/learn-facade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    GroupedItemComponent,
    LearnRxjsComponent,
    MenuComponent,
    LearnFacadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectInfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
