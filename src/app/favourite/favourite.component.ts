import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() isSelected = false;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onStarClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({
      newValue: this.isSelected
    });
  }
}
