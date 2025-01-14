import { Component } from '@angular/core';
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three/src/Three.js';
import { SimulationService } from '../simulation.service';
import { Boid } from '../boid';

@Component({
  selector: 'app-simulation',
  imports: [],
  templateUrl: './simulation.component.html',
  styleUrl: './simulation.component.scss',
})
export class SimulationComponent {
  private boids!: Boid[];

  constructor(private readonly simulationService: SimulationService) {
    simulationService.getBoids.subscribe((value) => (this.boids = value));

    // Simulation
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
  }
}
