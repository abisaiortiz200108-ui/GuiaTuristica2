import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { SitioFormPageRoutingModule } from './sitio-form-routing.module';

import { SitioFormPage } from './sitio-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitioFormPageRoutingModule
  ],
  declarations: [SitioFormPage]
})
export class SitioFormPageModule {}
