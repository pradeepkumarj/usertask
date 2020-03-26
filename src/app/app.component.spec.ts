import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatNativeDateModule, MatDialogModule, MatMenuModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FrontEndConfig } from './frontendConfig';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
        MatMenuModule
      ],
      declarations: [
        FilterPipe,
        AppComponent,
        HomeComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [FrontEndConfig, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },{provide: APP_BASE_HREF, useValue : '/' }]

    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
