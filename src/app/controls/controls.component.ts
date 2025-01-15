import { Component } from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss',
})
export class ControlsComponent {
  numberOfBoids;

  constructor(private readonly simulationService: SimulationService) {
    this.numberOfBoids = simulationService.numberOfBoids;
  }

  addBoid() {
    this.numberOfBoids = this.simulationService.addBoid();
  }

  subtractBoid() {
    this.numberOfBoids = this.simulationService.subtractBoid();
  }
}
