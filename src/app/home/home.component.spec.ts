import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FrontEndConfig } from '../frontendConfig';
import { JwtInterceptor } from '../_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../_helpers/error.interceptor';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
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
import {APP_BASE_HREF} from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterPipe,
        HomeComponent
      ],

      imports: [
        MatCardModule,
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
        MatMenuModule,
        InfiniteScrollModule

      ],
      providers: [FrontEndConfig, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },{provide: APP_BASE_HREF, useValue : '/' }]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
