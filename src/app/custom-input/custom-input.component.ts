import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
@Component({
    selector: 'app-custom-input',
    template: '<input [(ngModel)]="value" placeholder={{placeHolder}} />',
    providers: [     
        {       
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => CustomInputComponent),
            multi: true
        }   
    ]
})

export class CustomInputComponent{
    @Input() placeHolder: string = '';
    val= ""

    constructor(){}

    onChange: any = () => {
    }

    onTouch: any = () => {}
    
    set value(val){  
        this.val = val
        this.onChange(val)
        this.onTouch(val)
    }

    writeValue(value: any){ 
        this.value = value
    }

    registerOnChange(fn: any){
        this.onChange = fn
    }

    registerOnTouched(fn: any){
        this.onTouch = fn
    }
}
