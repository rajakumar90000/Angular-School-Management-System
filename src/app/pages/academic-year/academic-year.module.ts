import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicYearRoutingModule } from './academic-year-routing.module';
import { AcademicYearComponent } from './academic-year.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';


@NgModule({
  declarations: [AcademicYearComponent, CreateAcademicYearComponent],
  imports: [
    CommonModule,
    AcademicYearRoutingModule,
    CustomMaterialModule
  ], exports: []
})
export class AcademicYearModule { }
