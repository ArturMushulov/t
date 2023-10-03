import { Component, OnInit } from '@angular/core';
import { Object } from '../object.model';
import { ObjectService } from '../object.service';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css'],
})
export class ObjectListComponent implements OnInit {
  objects: Object[] = [];
  selectedObject: Object | null = null;

  constructor(private objectService: ObjectService) {}

  ngOnInit(): void {
    this.objects = this.objectService.getObjects();
    console.log('Objects:', this.objects);
  }

  selectObject(obj: Object): void {
    this.selectedObject = obj;
    console.log(this.selectObject);
  }
}
