import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <button mat-flat-button color="primary" class="text-white">
      Material Button
    </button>
    <button class="px-4 py-2 rounded bg-blue-400">Tailwind Button</button>
    <h1 class="text-blue-500">Tailwind Heading One</h1>
    <div class="h-48 w-48 rounded bg-primary-500"></div>`,
  styles: [],
})
export class AppComponent {
  title = "ng-material-tailwind-starter";
}
