import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const imoprtsAndExports =[
  MatTabsModule,
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: [...imoprtsAndExports],
  exports: [...imoprtsAndExports]
})
export class MaterialModule { }
