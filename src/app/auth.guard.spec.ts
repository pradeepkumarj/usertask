import { TestBed, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatNativeDateModule, MatDialogModule, MatCheckboxModule, MatMenuModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { FrontEndConfig } from './frontendConfig';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import {APP_BASE_HREF} from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

describe('AuthGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterPipe,
        HomeComponent,
      ],
      imports: [AppRoutingModule,
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
        MatMenuModule,
        InfiniteScrollModule
      ],
      providers: [AuthGuard, FrontEndConfig, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },{provide: APP_BASE_HREF, useValue : '/' }]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
