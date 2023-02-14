import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css'],
})
export class MyInputComponent {
  @Input() label: string = '';
  @Output() keyUp: EventEmitter<string> = new EventEmitter();

  onInput(event: any) {
    return this.keyUp.emit(event.target.value);
  }
}
