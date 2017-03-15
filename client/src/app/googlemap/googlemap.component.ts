import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  title: string = 'Dogs Map';
  lat: number = 40.45;
  lng: number = -3.65500;
  dogs = [];
  map;
  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.dogService.getList().subscribe((dogs)=> this.dogs = dogs )
  }

  log(){
    console.log(this.dogs);
    console.log(this.dogs[2].latitude);
    console.log(this.dogs[2].longitude);

    var dogMarker = new google.maps.Marker({
        position: {
          lat: this.dogs[2].latitude,
          lng: this.dogs[2].longitude
        },
        map: this.map,
        title: this.dogs[2].dogName,
      });
      console.log(dogMarker);
    }
}
