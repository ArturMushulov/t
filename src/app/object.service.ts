import { Injectable } from '@angular/core';
import { Object } from './object.model';
import { objects } from './object';

@Injectable({
  providedIn: 'root',
})
export class ObjectService {
  private objects: Object[] = objects;

  getObjects(): Object[] {
    return this.objects;
  }
}
