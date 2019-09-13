import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoAComponent } from './grupo-a/grupo-a.component';
import { GrupoBComponent } from './grupo-b/grupo-b.component';
import { ThemeComponent } from './theme/theme.component';


@NgModule({
  declarations: [
    AppComponent,
    GrupoAComponent,
    GrupoBComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
