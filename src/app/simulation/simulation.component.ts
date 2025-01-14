import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-simulation',
  imports: [],
  templateUrl: './simulation.component.html',
  styleUrl: './simulation.component.scss',
})
export class SimulationComponent implements AfterViewInit {
  @ViewChild('simulation')
  simulationDiv!: ElementRef;

  constructor(private readonly simulationService: SimulationService) {}

  ngAfterViewInit(): void {
    (this.simulationDiv.nativeElement as HTMLDivElement).appendChild(
      this.simulationService.getRenderer.domElement,
    );
  }

  @HostListener('window:resize', ['$event'])
  simulationResize(event: UIEvent) {
    const window = event.target as Window;
    this.simulationService.getCamera.aspect =
      window.innerWidth / window.innerHeight;
    this.simulationService.getRenderer.setSize(
      window.innerWidth,
      window.innerHeight,
    );
  }
}
