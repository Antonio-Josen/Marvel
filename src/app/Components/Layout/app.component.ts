import { Component, OnInit, signal, ElementRef, HostListener } from '@angular/core';
import { MarvelService } from '../../core/service.service';
import { Event } from '../../interface/interface';
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
  page = 1; // Página actual de datos
  loading = false;

  marvelList = signal<Event[] | null>(null);

  error?: string;

  constructor(private marvelService: MarvelService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.getMarvelList();
  }

  getMarvelList(): void {
    this.loading = true;
    this.marvelService.getMarvelList()?.subscribe(
      (data) => {
        this.marvelList.set(data.data.results);
        this.loading = false;
      },
    );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (!this.loading && scrollPosition >= maxScroll) {
      this.loadMoreCharacters();
    }
  }
  loadMoreCharacters(): void {
    this.loading = true;
    this.marvelService.getNewsMarvelList()?.subscribe(
      (data) => {
        this.characters = [...this.characters, ...data.data.results];
        this.loading = false;
      },
    );
  }
}


