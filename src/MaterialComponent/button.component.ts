import { Component } from '@angular/core';

@Component({
    selector: 'button-comp',
    templateUrl: './button.component.html'
})
export class Button{

    onClick(){
        alert('clicked');
    }

}