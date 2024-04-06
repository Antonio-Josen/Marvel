import { TestBed } from '@angular/core/testing';
import { MarvelListComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvelListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MarvelListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Marvel' title`, () => {
    const fixture = TestBed.createComponent(MarvelListComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Marvel');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MarvelListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Marvel');
  });
});
