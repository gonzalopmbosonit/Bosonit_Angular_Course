import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Crear un nuevo módulo llamado contadorModule
// declaraciones e importaciones

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.modules';


@NgModule({
  declarations: [
    AppComponent,
    
  
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
