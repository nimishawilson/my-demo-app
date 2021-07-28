import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { GroupedItemComponent } from './grouped-item/grouped-item.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { MenuComponent } from './menu/menu.component';
import { LearnFacadeComponent } from './learn-facade/learn-facade.component';

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
    
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
