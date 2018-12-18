import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProxyComponent } from './proxy/proxy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProxyComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        { path: 'sniper.atx', component:ProxyComponent },
        { path: '**', component: PageNotFoundComponent }
      ],
      { enableTracing: true } // <-- debugging purposes only
    ),    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
