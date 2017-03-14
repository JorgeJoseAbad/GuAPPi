import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat: number = 40.45;
  lng: number = -3.65500;
  constructor() { }

  ngOnInit() {

  }

}
