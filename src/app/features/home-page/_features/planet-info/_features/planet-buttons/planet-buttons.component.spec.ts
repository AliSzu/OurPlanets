import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetButtonsComponent } from './planet-buttons.component';

describe('PlanetButtonsComponent', () => {
  let component: PlanetButtonsComponent;
  let fixture: ComponentFixture<PlanetButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
