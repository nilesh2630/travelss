import { Component } from '@angular/core';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  comments: string[] = [];
  newItem: string = '';

  addItem() {
    if (this.newItem) {
      this.comments.push(this.newItem);
      this.newItem = '';
    }
  }
}
