import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from '../material.module';
import { FormatTextPipe } from './pipes/format-text.pipe';

@NgModule({
  declarations: [
    TableComponent,
    FormatTextPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TableComponent,
  ],
})
export class SharedModule { }
