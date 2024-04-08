import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MarvelListComponent } from './app/Components/Home/home.component';

bootstrapApplication(MarvelListComponent, appConfig)
  .catch((err) => console.error(err));
