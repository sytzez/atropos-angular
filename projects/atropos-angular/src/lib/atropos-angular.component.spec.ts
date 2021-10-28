import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtroposAngularComponent } from './atropos-angular.component';

describe('AtroposAngularComponent', () => {
  let component: AtroposAngularComponent;
  let fixture: ComponentFixture<AtroposAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtroposAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtroposAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
