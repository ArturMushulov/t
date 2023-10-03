import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Object } from './object.model';

@Injectable({
  providedIn: 'root',
})
export class ObjectSelectionService {
  private selectedObjectSubject = new BehaviorSubject<Object | null>(null);
  objectSelected$ = this.selectedObjectSubject.asObservable();

  constructor() {}

  selectObject(obj: Object): void {
    this.selectedObjectSubject.next(obj);
  }
}
