import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './Layout/layout/layout.component';
import { SideBarComponent } from './Layout/layout/Components/side-bar/side-bar.component';
import { HeaderComponent } from './Layout/layout/Components/header/header.component';
import { AppNavItemComponent } from './Layout/layout/Components/side-bar/nav-item/nav-item.component';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideBarComponent,
    HeaderComponent,
    AppNavItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatSelectModule,
    MatFormFieldModule,
    TablerIconsModule.pick(TablerIcons),
    RouterModule.forRoot([]),

  ],
  exports: [TablerIconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
