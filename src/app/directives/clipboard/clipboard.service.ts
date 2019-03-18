// Modified from: https://www.bennadel.com/blog/3235-creating-a-simple-copy-to-clipboard-directive-in-angular-2-4-9.htm

import { DOCUMENT } from "@angular/platform-browser";
import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";

@Injectable()
export class ClipboardService {
	private dom: Document;

	constructor(@Inject(DOCUMENT) dom: Document) {
		this.dom = dom;
	}

	public copy(value: string): Promise<string> {

		return new Promise((resolve, reject): void => {
			var textarea = null;

			try {
				// NOTE: This Textarea is being rendered off-screen.
				textarea = this.dom.createElement("textarea");
				textarea.style.height = "0px";
				textarea.style.left = "-100px";
				textarea.style.opacity = "0";
				textarea.style.position = "fixed";
				textarea.style.top = "-100px";
				textarea.style.width = "0px";
				this.dom.body.appendChild(textarea);

				// Set and select the value (creating an active Selection range).
				textarea.value = value;
				textarea.select();

				// Ask the browser to copy the current selection to the clipboard.
				this.dom.execCommand("copy");

				resolve(value);
			} finally {
				// Cleanup - remove the Textarea from the DOM if it was injected.
				if (textarea && textarea.parentNode) {
					textarea.parentNode.removeChild(textarea);
				}
			}
		});
	}
}
