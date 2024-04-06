import { Component, OnInit, signal } from '@angular/core';
import { MarvelService } from '../../core/service.service';

import {NgIf} from '@angular/common';
import { CommonModule } from '@angular/common';
import {Event} from '../../interface/interface';
import { HeaderComponent } from "../Header/header.component";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent]
})




export class MarvelListComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  characters: any[] = [];

  marvelList = signal<Event[]|null>(null );

  error?: string;

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {

    this.getMarvelList();
  }

  getMarvelList(): void {
    this.marvelService.getMarvelList()?.subscribe(
        (data) => {
          this.marvelList.set(data.data.results);
        },
      
      );
  }
}
