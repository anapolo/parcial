import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoBRoutingModule } from './grupo-b-routing.module';
import { GrupoBComponent } from './grupo-b.component';
import { Componente6Component } from './componente6/componente6.component';
import { Componente7Component } from './componente7/componente7.component';
import { Componente8Component } from './componente8/componente8.component';
import { Componente9Component } from './componente9/componente9.component';
import { Componente10Component } from './componente10/componente10.component';


@NgModule({
  declarations: [GrupoBComponent, Componente6Component, Componente7Component, Componente8Component, Componente9Component, Componente10Component],
  imports: [
    CommonModule,
    GrupoBRoutingModule
  ]
})
export class GrupoBModule { }
