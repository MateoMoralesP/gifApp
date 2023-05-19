import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private _tagsHistory: string[];

  constructor(private gifsService: GifsService) {
    this._tagsHistory = this.gifsService.tagsHistory;
  }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchByTag(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
