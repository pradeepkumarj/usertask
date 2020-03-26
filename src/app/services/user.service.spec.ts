import { TestBed } from '@angular/core/testing';
import { FrontEndConfig } from '../frontendConfig';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from '../_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../_helpers/error.interceptor';
import { AppRoutingModule } from '../app-routing.module';
import { UserService } from './user.service';
import { HomeComponent } from '../home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatNativeDateModule, MatDialogModule, MatCheckbox, MatCheckboxModule, MatMenuModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      FilterPipe,
      HomeComponent,
    ],
    imports: [
      HttpClientModule,
      AppRoutingModule,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatCardModule,
      MatRadioModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatDialogModule,
      MatAutocompleteModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule,
      NgxSpinnerModule,
      MatCheckboxModule,
      MatMenuModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    providers: [FrontEndConfig, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },{provide: APP_BASE_HREF, useValue : '/' }]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});

