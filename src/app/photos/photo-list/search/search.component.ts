import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    @Input() public value = '';
    @Output() public onTyping = new EventEmitter<string>();
    public debounce = new Subject<string>();
    
    //Fontawesome icons tie
    public faSearch = faSearch;

    constructor() { }

    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.onTyping.emit(filter));
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    keyupListener(event: any) {
        this.debounce.next(event.target.value);
    }
}