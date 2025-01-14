import { Euler, Vector3 } from 'three/src/Three.Core.js';

export class Boid {
  position = new Vector3().random();
  rotation = new Euler().setFromVector3(new Vector3().random());
}
