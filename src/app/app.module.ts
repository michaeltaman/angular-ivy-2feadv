import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { ExpandableTableComponent } from './expandable-table/expandable-table.component';
import { DynamicCellComponent } from './expandable-table/dynamic-cell/dynamic-cell.component';
import { ExpandedTableComponent } from './expandable-table/expanded-table/expanded-table.component';
import { SelectableTableComponent } from './selectable-table/selectable-table.component';
import { TableWithFooterComponent } from './table-with-footer/table-with-footer.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { TableDropdownComponent } from './dynamic-table/table-dropdown/table-dropdown.component';

// material modules
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { DynamicMatTableModule } from 'dynamic-mat-table';

const MaterialModules = [
  MatTabsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatSliderModule,
  MatTableModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatMenuModule,
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ...MaterialModules,
    BrowserAnimationsModule,
    DynamicMatTableModule,
  ],
  entryComponents: [
    TableDropdownComponent,
    ExpandedTableComponent,
    DynamicCellComponent,
  ],
  declarations: [
    AppComponent,
    SimpleTableComponent,
    ExpandableTableComponent,
    SelectableTableComponent,
    TableWithFooterComponent,
    DynamicTableComponent,
    TableDropdownComponent,
    ExpandedTableComponent,
    DynamicCellComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
