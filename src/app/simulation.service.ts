import { Injectable } from '@angular/core';
import { Boid } from './boid';
import {
  Color,
  PerspectiveCamera,
  Quaternion,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three/src/Three.js';

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
    for (let i = 0; i < 20; i++) this.addBoid();

    this.scene.background = new Color(Color.NAMES.lightblue);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.position.z = 20;

    this.renderer.setAnimationLoop(() => {
      const avgRot = SimulationService.avgQuaternion(
          ...this.boids.map((value) => value.mesh.quaternion),
        ),
        avgPos = SimulationService.avgVector3(
          ...this.boids.map((value) => value.mesh.position),
        );

      for (const boid of this.boids)
        boid.rotate(
          SimulationService.avgQuaternion(
            new Quaternion(),
            avgRot,
            boid.calculateCohesion(avgPos),
          ),
        );
      this.renderer.render(this.scene, this.camera);
    });
  }

  addBoid() {
    this.boids.push(new Boid(this.scene));

    return this.boids.length;
  }

  subtractBoid() {
    this.scene.remove(this.boids[0].mesh);
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

  static avgVector3(...vectors: Vector3[]) {
    const result = new Vector3(0, 0, 0);

    for (const vector of vectors) result.add(vector);
    result.divideScalar(vectors.length);

    return result;
  }

  static avgQuaternion(...quaternions: Quaternion[]) {
    const result = new Quaternion(0, 0, 0, 0);

    for (const quaternion of quaternions) {
      result.x += quaternion.x;
      result.y += quaternion.y;
      result.z += quaternion.z;
      result.w += quaternion.w;
    }

    result.x /= quaternions.length;
    result.y /= quaternions.length;
    result.z /= quaternions.length;
    result.w /= quaternions.length;

    return result;
  }
}
