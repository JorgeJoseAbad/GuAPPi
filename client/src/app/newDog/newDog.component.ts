import { Component, OnInit, Input } from '@angular/core';
import { DogComponent } from '../dog/dog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NewDogService} from '../newDog.service';

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
     dogName: '',
     breed: '',
     age: '',
     description: '',
     imgUrl: ''
   };
   error: string;



  constructor(private router: Router,private session: NewDogService) { }

  ngOnInit() {
  }

  addDog() {
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
