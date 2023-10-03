import { Component, OnInit } from '@angular/core';
import { Object } from '../object.model';
import { ObjectService } from '../object.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  objects: Object[] = [];
  selectedObject: Object | null = null;
  map: L.Map | null = null;

  constructor(private objectService: ObjectService) {}

  ngOnInit(): void {
    this.objects = this.objectService.getObjects();

    this.map = L.map('leafletMap').setView(
      [this.objects[0].latitude, this.objects[0].longitude],
      10
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);

    this.objects.forEach((obj) => {
      if (this.map) {
        const marker = L.marker([obj.latitude, obj.longitude]).addTo(this.map);
        marker.bindPopup(obj.name);
      } else {
        console.error('Map is null.');
      }
    });
  }

  selectObject(obj: Object): void {
    this.selectedObject = obj;
    if (this.map) {
      this.map.setView([obj.latitude, obj.longitude], 10);
    }
  }
}
