import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDRoutingModule } from './crud-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule
  ]
})
export class CRUDModule { }
