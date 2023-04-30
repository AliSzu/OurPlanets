import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetImageComponent } from './planet-image.component';

describe('PlanetImageComponent', () => {
  let component: PlanetImageComponent;
  let fixture: ComponentFixture<PlanetImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
