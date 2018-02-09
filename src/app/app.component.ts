import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    isSelected: true
  }

  statePreview = this.data.isSelected;

  onIconChange($event){
    console.log($event.newValue);
    this.statePreview = $event.newValue;
  }
}
