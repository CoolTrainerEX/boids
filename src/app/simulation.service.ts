import { Injectable } from '@angular/core';
import { Boid } from './boid';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  private readonly boids = new BehaviorSubject<Boid[]>([]);

  constructor() {
    for (let i = 0; i < 10; i++) this.addBoid();
  }

  addBoid() {
    const tempBoids = this.boids.getValue();

    tempBoids.push(new Boid());
    this.boids.next(tempBoids);
  }

  subtractBoid() {
    const tempBoids = this.boids.getValue();

    if (tempBoids.length > 0) {
      tempBoids.pop();
      this.boids.next(tempBoids);
    }
  }

  public get getBoids(): BehaviorSubject<Boid[]> {
    return this.boids;
  }
}
