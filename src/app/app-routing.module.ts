import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './../MaterialComponent/MaterialModule';

import { MaterialComponent } from './../MaterialComponent/material.component';
import { ToolBarComponent } from './../MaterialComponent/ToolBar.component';
import { MaterialRoutingModule, MaterialRoutes } from "./../MaterialComponent/material-routing.module";

const routes: Routes = [
  {
    path: 'material', component: MaterialComponent,
    children:[
      ...MaterialRoutes
    ]
  }
];

@NgModule({
  declarations:[
    MaterialComponent,
    ToolBarComponent
  ],
  imports: [
    MaterialModule,
    RouterModule.forRoot(routes),
    MaterialRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
