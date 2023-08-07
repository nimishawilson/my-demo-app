import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupedItemComponent } from './grouped-item/grouped-item.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { MenuComponent } from './menu/menu.component';
import { LearnFacadeComponent } from './learn-facade/learn-facade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CopyClipboardComponent } from './copy-clipboard/copy-clipboard.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GroupedItemComponent,
    LearnRxjsComponent,
    MenuComponent,
    LearnFacadeComponent,
    CopyClipboardComponent,
    DropdownComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
