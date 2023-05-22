import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  gifs: any[] = [
    // Aquí puedes proporcionar los datos de los gifs
    // Ejemplo: { id: 1, title: 'Gif 1', ... }
  ];
}
