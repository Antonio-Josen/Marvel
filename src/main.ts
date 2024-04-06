import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MarvelListComponent } from '../src/app/Components/Layout/app.component';

bootstrapApplication(MarvelListComponent, appConfig)
  .catch((err) => console.error(err));
