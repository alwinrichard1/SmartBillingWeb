import { templateDeclaration, templateEntry } from './app-templates.module';
import { pipesDeclarations } from './app-pipes.module';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import 'hammerjs';
import { materialImports } from 'app/app-material.module';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    templateDeclaration,
    pipesDeclarations
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    materialImports,
    NguiAutoCompleteModule
  ],
  entryComponents: [
    templateEntry
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
