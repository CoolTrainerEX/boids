import { Injectable } from '@angular/core';
import { Boid } from './boid';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three/src/Three.js';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  private readonly boids: Boid[] = [];

  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  private readonly renderer = new WebGLRenderer();

  constructor() {
    for (let i = 0; i < 10; i++) this.addBoid();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.position.z = 10;

    this.renderer.setAnimationLoop(() => {
      for (const boid of this.boids) boid.move();
      this.renderer.render(this.scene, this.camera);
    });
  }

  addBoid() {
    this.boids.push(new Boid(this.scene));

    return this.boids.length;
  }

  subtractBoid() {
    this.boids[0].remove(this.scene);
    this.boids.shift();

    return this.boids.length;
  }

  public get numberOfBoids(): number {
    return this.boids.length;
  }

  public get getCamera(): PerspectiveCamera {
    return this.camera;
  }

  public get getRenderer(): WebGLRenderer {
    return this.renderer;
  }
}
