import { Component } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss',
})
export class ControlsComponent {
  numberOfBoids = 0;

  constructor(private readonly simulationService: SimulationService) {
    simulationService.getBoids.subscribe(
      (value) => (this.numberOfBoids = value.length),
    );
  }

  addBoid() {
    this.simulationService.addBoid();
  }

  subtractBoid() {
    this.simulationService.subtractBoid();
  }
}
