import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule{

}