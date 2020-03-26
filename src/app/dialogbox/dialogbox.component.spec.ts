import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA, MatMenuModule, MatDialogModule } from '@angular/material';
import { DialogboxComponent } from './dialogbox.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule} from '@angular/router/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ToastrModule } from 'ng6-toastr-notifications';
import { HttpClientModule } from '@angular/common/http';
import { FrontEndConfig } from '../frontendConfig';

describe('DialogboxComponent', () => {
  let component: DialogboxComponent;
  let fixture: ComponentFixture<DialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogboxComponent ],
      imports : [ FormsModule,RouterTestingModule,InfiniteScrollModule, 
                  MatMenuModule,MatDialogModule,ToastrModule.forRoot(),HttpClientModule ],
      providers: [ FrontEndConfig,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
