
import {NgModule} from '@angular/core';

import { MatRadioModule, MatIconModule, MatButtonModule,  MatInputModule, MatRippleModule, MatFormFieldModule,
         MatNativeDateModule, MatDialogModule, MatSnackBarModule, MatAutocompleteModule, MatSelectModule,
         MatDatepickerModule, MatCheckboxModule, MatMenuModule, MatTabsModule,
         MatSlideToggleModule, MatCardModule, MatExpansionModule } from '@angular/material';

@NgModule({
    imports: [
        MatRadioModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatRippleModule,
        MatNativeDateModule,
        MatDialogModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatMenuModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatExpansionModule
    ],
    exports: [
        MatRadioModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatNativeDateModule,
        MatDialogModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatMenuModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatExpansionModule
    ]
  })
  export class MaterialModule {}
