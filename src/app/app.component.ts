import { Component } from '@angular/core';
import { ControlsComponent } from './controls/controls.component';
import { SimulationComponent } from './simulation/simulation.component';

@Component({
  selector: 'app-root',
  imports: [ControlsComponent, SimulationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'boids';
}
