import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() inputClass: string = 'px-5 py-2 rounded-md';
  @Input() inputPlaceholder: string = '';
  @Input() inputFormControlName: string = '';
  @Input() inputId: string = '';
  @Input() inputType: string = '';
}
