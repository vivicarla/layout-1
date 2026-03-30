import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Farmador } from './farmador';

describe('Farmador', () => {
  let component: Farmador;
  let fixture: ComponentFixture<Farmador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Farmador],
    }).compileComponents();

    fixture = TestBed.createComponent(Farmador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
