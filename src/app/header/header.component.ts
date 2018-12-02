import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	@Output() navigator = new EventEmitter<string>();
	onLinkClick(link: string) {
		this.navigator.emit(link);
	}
}