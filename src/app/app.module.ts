import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { CardsComponent } from './cards/cards.component';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { TopOfpageComponent } from './top-ofpage/top-ofpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SameAsDirective } from './shared/directive/same-as.directive';
import { HoverDirective } from './shared/directive/hover.directive';
import { GameModule } from './game/game.module';
import { CascadingdropComponent } from './cascadingdrop/cascadingdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TableComponent,
    HeaderComponent,
    InfoFormComponent,
    CardsComponent,
    Comp1Component,
    Comp2Component,
    TopOfpageComponent,
    SameAsDirective,
    HoverDirective,
    CascadingdropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GameModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
