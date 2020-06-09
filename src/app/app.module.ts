import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './layouts/register/register.component';
import { AuthComponent } from './layouts/auth/auth.component';
import {AppRouterModule} from './router/router.module';
import {RouterModule} from '@angular/router';
import { FormComponent } from './blocks/form/form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
