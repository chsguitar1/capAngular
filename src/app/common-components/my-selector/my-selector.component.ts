import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-selector',
  templateUrl: './my-selector.component.html',
  styleUrls: ['./my-selector.component.css'],
})
export class MySelectorComponent {
  @Input() label: string = '';
  @Input() values: Array<string> = [];
  @Output() selectedValue: EventEmitter<string> = new EventEmitter();

  onChange(event: any) {
    this.selectedValue.emit(event.target.value);
  }
}
