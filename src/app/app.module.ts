import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AtroposModule } from 'atropos-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AtroposModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
