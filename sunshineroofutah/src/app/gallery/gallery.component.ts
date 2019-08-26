import { Component, OnInit } from '@angular/core';
import { Gallery } from '../gallery';
import { GALLERYIMAGES } from '../gallery-images';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  section = {
    title: "Gallery"
  }

  images = GALLERYIMAGES;

  public _albums: Array<{src:string, caption: string, thumb: string}> = [];

  constructor(private _lightbox: Lightbox) {
    for (let img of this.images) {
      const src = img.src;
      const alt = img.alt;
      const album = {
         src: src,
         caption: alt,
         thumb: ""
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
    // console.log(this._albums[index]);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit() {

  }



}
