import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatExpansionModule,
  CdkTreeModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [...materialModules]
  ],
  exports: [
    [...materialModules]
  ]
})
export class MaterialModule { }
