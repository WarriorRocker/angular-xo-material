//Modifed from: https://www.bennadel.com/blog/3235-creating-a-simple-copy-to-clipboard-directive-in-angular-2-4-9.htm

import { Directive, Input } from "@angular/core";
import { EventEmitter } from "@angular/core";

import { ClipboardService } from "./clipboard.service";

@Directive({
  selector: "[clipboard]",
  host: {
    "(click)": "copyToClipboard()"
  }
})
export class ClipboardDirective {
  @Input() clipboard: string;
  @Input() copyEvent: EventEmitter<string> = null;
  @Input() errorEvent: EventEmitter<Error> = null;

  constructor(private _clipboard: ClipboardService) { }

  public copyToClipboard(): void {
    this._clipboard
      .copy(this.clipboard)
      .then((value: string): void => {
        if (this.copyEvent)
          this.copyEvent.emit(value);
      })
      .catch((error: Error): void => {
        if (this.errorEvent)
          this.errorEvent.emit(error);
      });
  }
}
