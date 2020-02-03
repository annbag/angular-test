import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent {

    @Input() item: string;
    @Output() newItemEvent = new EventEmitter<string>();

    @Output() color: EventEmitter<string> = new EventEmitter();
    

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }

    changeColor(color: string) {
        console.log(color);
        this.color.emit(color);
    }

}




