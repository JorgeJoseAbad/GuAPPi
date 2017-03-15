import { Component, OnInit, Input } from '@angular/core';
import { DogComponent } from '../dog/dog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NewDogService} from '../newDog.service';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader,AgmCoreModule } from 'angular2-google-maps/core';




@Component({
  selector: 'app-newDog',
  templateUrl: './newDog.component.html',
  styleUrls: ['./newDog.component.css'],
  providers:[NewDogService]
})
export class NewDogComponent implements OnInit {
  @Input() any;
  newDog: any;
   formInfo = {
     user_id: '',
     dogName: '',
     breed: '',
     age: '',
     description: '',
     imgUrl: '',
     latitude: 6,
     longitude: 6
   };
   error: string;

     public latitude: number;
     public longitude: number;
     public searchControl: FormControl;
     public zoom: number;

     @ViewChild("search")
       public searchElementRef: ElementRef;

    constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone,
      private router: Router,
      private session: NewDogService
    ) { }

  ngOnInit() {
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

        //create search FormControl
    this.searchControl = new FormControl();

        //set current position
    this.setCurrentPosition();

        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
          let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ["address"]
          });
          autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
              //get the place result
              let place: google.maps.places.PlaceResult = autocomplete.getPlace();

              //verify result
              if (place.geometry === undefined || place.geometry === null) {
                return;
              }

              //set latitude, longitude and zoom
              this.latitude = place.geometry.location.lat();
              this.longitude = place.geometry.location.lng();
              this.zoom = 12;
              console.log(this.latitude);
              console.log(this.longitude);

            });
          });
        });
      }

      private setCurrentPosition() {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.zoom = 12;
          });
        }

}





//var origin_input = document.getElementById('origin-input');
//console.log(origin_input)
  addDog() {
    this.formInfo.latitude=this.latitude;
    this.formInfo.longitude=this.longitude;
    console.log(this.formInfo);
    this.session.newDog(this.formInfo)
      .subscribe(
        (newDog) => this.successCb(newDog),
        (err) => this.errorCb(err)
      );
  }

  errorCb(err) {
    this.error = err;
    this.newDog = null;
  }

  successCb(newDog) {
    this.newDog = newDog;
    this.error = null;
  }

}
