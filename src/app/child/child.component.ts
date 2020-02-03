import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

    @Input() title: string;
    @Input() description: string;
    @Output() newItemEvent: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }

}
