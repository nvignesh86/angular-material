import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './MaterialModule';

import { Button } from './button.component';
import { DialogComponent, DialogContent } from './Dialog/dialog.container';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


export const MaterialRoutes: Routes = [
    {
      path: 'button', component: Button,
    },
    {
        path: 'dialog', component: DialogComponent
    }
  ];
  

@NgModule({
    declarations:[
        Button,
        DialogComponent,
        DialogContent,
    ],
    imports:[
        MaterialModule,
        FormsModule,
        CommonModule
      //  RouterModule.forChild(MaterialRoutes)
    ],
    exports:[
     //   RouterModule
    ]
})
export class MaterialRoutingModule{

}