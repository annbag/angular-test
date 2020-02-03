import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parnet',
    templateUrl: './parnet.component.html',
    styleUrls: ['./parnet.component.css']
})
export class ParnetComponent {
    items = ['item1', 'item2', 'item3', 'item4'];
    color: string;

    addItem(newItem: string) {
        this.items.push(newItem);
    }
}
