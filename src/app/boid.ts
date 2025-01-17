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
  private static readonly speed = 0.05;

  private readonly mesh = new Mesh(
    new ConeGeometry(0.25, 1),
    new MeshBasicMaterial({ color: 'gray' }),
  );

  constructor(scene: Scene) {
    this.mesh.position.set(
      randFloat(-5, 5),
      randFloat(-5, 5),
      randFloat(-5, 5),
    );
    this.mesh.setRotationFromQuaternion(new Quaternion().random());

    scene.add(this.mesh);
  }

  move(boids: Boid[]) {
    this.mesh.quaternion.slerp(
      Boid.avgQuaternion(
        // this.calculateSeparation(boids),
        this.calculateAlignment(boids),
        this.calculateCohesion(boids),
      ),
      Boid.speed,
    );
    this.mesh.translateOnAxis(this.mesh.up, Boid.speed);
  }

  remove(scene: Scene) {
    scene.remove(this.mesh);
  }

  calculateSeparation(boids: Boid[]) {
    return new Quaternion(0, 0, 0, 0);
  }

  calculateAlignment(boids: Boid[]) {
    return Boid.avgQuaternion(...boids.map((value) => value.mesh.quaternion));
  }

  calculateCohesion(boids: Boid[]) {
    const avgPos = new Vector3(0, 0, 0);

    for (const boid of boids) avgPos.add(boid.mesh.position);
    avgPos.divideScalar(boids.length);

    const refObj = new Object3D();
    refObj.position.set(...this.mesh.position.toArray());
    refObj.lookAt(avgPos);

    return refObj.quaternion;
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
