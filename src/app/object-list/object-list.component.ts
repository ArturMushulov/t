import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Object } from '../object.model';
import { ObjectService } from '../object.service';
import { ObjectSelectionService } from '../object-selection.service';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css'],
})
export class ObjectListComponent implements OnInit {
  @Input() objects!: Object[];
  @Output() objectSelected = new EventEmitter<Object>();
  selectedObject!: Object;

  constructor(
    private objectService: ObjectService,
    private objectSelectionService: ObjectSelectionService
  ) {}

  ngOnInit(): void {
    this.objects = this.objectService.getObjects();
  }
  handleClick(obj: Object): void {
    this.objectSelectionService.selectObject(obj);
  }
}
