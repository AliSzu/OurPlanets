import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetTextComponent } from './planet-text.component';

describe('PlanetTextComponent', () => {
  let component: PlanetTextComponent;
  let fixture: ComponentFixture<PlanetTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
