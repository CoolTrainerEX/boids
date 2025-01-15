import { randFloat } from 'three/src/math/MathUtils.js';
import {
  ConeGeometry,
  Mesh,
  MeshBasicMaterial,
  Quaternion,
  Scene,
} from 'three/src/Three.Core.js';

export class Boid {
  private static speed = 0.01;

  private readonly rotation = new Quaternion().random();
  private readonly mesh = new Mesh(
    new ConeGeometry(0.5, 1),
    new MeshBasicMaterial({ color: 'gray' }),
  );

  constructor(scene: Scene) {
    this.mesh.position.x = randFloat(-5, 5);
    this.mesh.position.y = randFloat(-5, 5);
    this.mesh.position.z = randFloat(-5, 5);

    scene.add(this.mesh);
  }

  move() {
    this.mesh.setRotationFromQuaternion(this.rotation);
    this.mesh.translateOnAxis(this.mesh.up, Boid.speed);
  }

  remove(scene: Scene) {
    scene.remove(this.mesh);
  }
}
