import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogService} from '../dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
  providers:[DogService]
})
export class DogComponent implements OnInit {
  dogs;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dog: DogService
  ) { }

  ngOnInit() {
    this.dog.getList()
      .subscribe((dogs) => {
        this.dogs = dogs;
      });

    }
/*
    ngOnInit() {
        this.route.params.subscribe(params => {
          this.getPhoneDetails(params['id']);
        });
      }*/

      

      getDogDetails(id) {
        this.dog.get(id)
          .subscribe((dog) => {
            this.dog = dog;
          });
      }

      deleteDog(id) {
      if (window.confirm('Are you sure?')) {
        this.dog.remove(id)
          .subscribe(() => {
            this.router.navigate(['']);
          });
          }
    }
}
