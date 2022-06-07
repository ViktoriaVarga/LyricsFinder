import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const imoprtsAndExports =[
  MatTabsModule,
  CommonModule,
  MatCardModule,
  MatButtonModule
]

@NgModule({
  imports: [...imoprtsAndExports],
  exports: [...imoprtsAndExports]
})
export class MaterialModule { }
