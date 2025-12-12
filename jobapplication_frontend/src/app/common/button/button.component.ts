import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() primary: boolean = true;
  @Input() buttonType: string = 'button';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<MouseEvent>();

  class: string;

  constructor() {
    this.class = "rounded-md font-medium py-2 px-4 transition ease-out hover:ease-in";
  }

  onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }

  get buttonClass(): string {
    if (this.primary)
      this.class += " bg-blue-500 text-white hover:bg-blue-700";
    else
      this.class += " bg-white text-blue-500 hover:bg-blue-500 hover:text-white";
    
    if (this.disabled)
      this.class += " opacity-50 cursor-not-allowed";
    return this.class;
  }
}