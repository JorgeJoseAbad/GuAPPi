import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponent } from './newDog.component';

describe('NewDogComponent', () => {
  let component: NewDogComponent;
  let fixture: ComponentFixture<NewDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
