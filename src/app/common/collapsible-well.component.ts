import { Component, Input } from '@angular/core'

@Component ({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content selector="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visible" selecter="[well-body]"></ng-content>
        </div>
    `
})
export class CollapsibleWellComponent {
    visible: boolean = true;
    toggleContent() {

    }
}