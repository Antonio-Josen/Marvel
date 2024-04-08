import { Routes,ExtraOptions } from '@angular/router';
import { HistoriaComponent } from './Components/historia/historia.component';
import { MarvelListComponent } from './Components/Home/home.component';
import { LayoutComponent } from './Components/Layout/layout.component';

const routeOptions: ExtraOptions = {
    // Cambiar la estrategia de coincidencia de rutas a 'full'
    useHash: false,
    // Opcional: otras configuraciones de enrutamiento
  }

export const routes: Routes = [
  { path: 'Home', component: MarvelListComponent, pathMatch: 'full' },
  { path: 'Historia/:id', component: HistoriaComponent, pathMatch: 'full' },
    // Ruta de respaldo para manejar rutas no encontradas
    { path: '**', component: LayoutComponent }
];
