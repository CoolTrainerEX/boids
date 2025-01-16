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
  private static readonly speed = 0.01;

  private rotation = new Quaternion().random();
  private readonly mesh = new Mesh(
    new ConeGeometry(0.25, 1),
    new MeshBasicMaterial({ color: 'gray' }),
  );

  constructor(scene: Scene) {
    this.mesh.position.setScalar(randFloat(-5, 5));
    this.mesh.setRotationFromQuaternion(this.rotation);

    scene.add(this.mesh);
  }

  public get getRotation(): Quaternion {
    return this.rotation;
  }

  move(boids: Boid[]) {
    this.rotation = Boid.avgQuaternion(
      // this.calculateSeparation(boids),
      this.calculateAlignment(boids),
      this.calculateCohesion(boids),
    );

    this.mesh.quaternion.slerp(this.rotation, Boid.speed);
    this.mesh.translateOnAxis(this.mesh.up, Boid.speed);
  }

  remove(scene: Scene) {
    scene.remove(this.mesh);
  }

  calculateSeparation(boids: Boid[]) {
    return new Quaternion(0, 0, 0, 0);
  }

  calculateAlignment(boids: Boid[]) {
    const quaternions: Quaternion[] = [];

    for (const boid of boids) quaternions.push(boid.mesh.quaternion);

    return Boid.avgQuaternion(...quaternions);
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
