import { bootstrapApplication } from '@angular/platform-browser';
import { MarvelListComponent } from './app/Components/Home/home.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(MarvelListComponent, config);

export default bootstrap;
