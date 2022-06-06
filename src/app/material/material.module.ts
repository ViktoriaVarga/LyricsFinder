import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';


const imoprtsAndExports =[
  MatMenuModule,
  MatTabsModule,
  CommonModule
]


@NgModule({
  imports: [...imoprtsAndExports],
  exports: [...imoprtsAndExports]
})
export class MaterialModule { }
