import {
  BoxGeometry,
  Euler,
  Mesh,
  MeshBasicMaterial,
  Scene,
  Vector3,
} from 'three/src/Three.Core.js';

export class Boid {
  position = new Vector3().random();
  rotation = new Euler().setFromVector3(new Vector3().random());
  mesh = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 'gray' }),
  );

  constructor(scene: Scene) {
    scene.add(this.mesh);
  }

  move() {
    return;
  }
}
