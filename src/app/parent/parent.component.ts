import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    items = ['item1', 'item2'];
    constructor() { }

    ngOnInit() {
    }
    addItem(newItem: string) {
        this.items.push(newItem);
    }

}
