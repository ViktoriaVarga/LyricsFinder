import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { Router, RouterModule } from '@angular/router';

const declarationsAndExports = [
  HeaderComponent
]
const imporstAndExports = [
  MaterialModule,
  CommonModule,
  RouterModule
]

@NgModule({
  declarations: [...declarationsAndExports],
  imports: [ ...imporstAndExports ],
  exports: [...declarationsAndExports, ...imporstAndExports]
})
export class SharedModule { }
