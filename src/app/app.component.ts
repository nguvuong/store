import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

  <div class="w-100px flex justify-between">
    <div>01</div>
    <div>02</div>
    <div>03</div>
</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'store';
}
