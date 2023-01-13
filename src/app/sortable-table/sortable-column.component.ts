import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SortService } from './sort.service';

@Component({
    selector: '[sortable-column]',
    templateUrl: './sortable-column.component.html'
})
export class SortableColumnComponent implements OnInit {

    constructor(private sortService: SortService) { }

    @Input('sortable-column')
    columnName: string;

    @Input('sort-direction')
    sortDirection: string = '';

    private columnSortedSubscription: Subscription;

    @HostListener('click')
    sort() {
        this.sortDirection = this.sortDirection === 'ascending' ? 'descending' : 'ascending';
        this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
    }

    ngOnInit() {
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
            if (this.columnName != event.sortColumn) {
                this.sortDirection = '';
            }
        });
    }

    ngOnDestroy() {
        this.columnSortedSubscription.unsubscribe();
    }



}
