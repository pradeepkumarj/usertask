import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontEndConfig } from './frontendConfig';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ng6-toastr-notifications';
import { MaterialModule } from './material.module';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ExpiredtaskComponent } from './expiredtask/expiredtask.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    DialogboxComponent,
    LoginComponent,
    RegisterComponent,
    TasklistComponent,
    ExpiredtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    InfiniteScrollModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgbModule,
    FormsModule,
  ],
  entryComponents: [
    DialogboxComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [FrontEndConfig,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
