import { randFloat } from 'three/src/math/MathUtils.js';
import {
  ConeGeometry,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Quaternion,
  Scene,
  Vector3,
} from 'three/src/Three.Core.js';

export class Boid {
  private static readonly spread = 5;
  private static readonly speed = 0.01;

  readonly mesh = new Mesh(
    new ConeGeometry(0.25, 1),
    new MeshBasicMaterial({ color: 'gray' }),
  );

  constructor(scene: Scene) {
    this.mesh.position.set(
      randFloat(-Boid.spread, Boid.spread),
      randFloat(-Boid.spread, Boid.spread),
      randFloat(-Boid.spread, Boid.spread),
    );
    this.mesh.setRotationFromQuaternion(new Quaternion().random());

    scene.add(this.mesh);
  }

  rotate(rotation: Quaternion) {
    this.mesh.quaternion.slerp(rotation, Boid.speed);
    // this.mesh.quaternion.set(...rotation.toArray());
    this.mesh.translateOnAxis(this.mesh.up, Boid.speed);
  }

  calculateCohesion(avgPos: Vector3) {
    const refObj = new Object3D();
    refObj.position.set(...this.mesh.position.toArray());
    refObj.lookAt(avgPos);
    refObj.rotateX(Math.PI / 2);

    return refObj.quaternion;
  }
}
