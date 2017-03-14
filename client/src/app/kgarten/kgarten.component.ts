import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KgartenService } from '../kgarten.service';

@Component({
  selector: 'app-kgarten',
  templateUrl: './kgarten.component.html',
  styleUrls: ['./kgarten.component.css'],
  providers:[KgartenService]
})
export class KgartenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
