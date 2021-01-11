import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 'recipe';

  onPageChanged(page: string) {
    if (this.currentPage !== page) {
      this.currentPage = page;
    }
  }
}
