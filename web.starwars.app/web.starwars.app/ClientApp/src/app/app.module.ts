import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SwHomeComponent } from './sw-home/sw-home.component';
import { NavMenuService } from './nav-menu/service/nav-menu.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SwHomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: SwHomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [NavMenuService],
  bootstrap: [AppComponent]
})

export class AppModule { }
