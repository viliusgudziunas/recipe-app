import { Component } from '@angular/core';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent {
  currentPage = 'recipe';

  onPageChanged(page: string) {
    if (this.currentPage !== page) {
      this.currentPage = page;
    }
  }
}
