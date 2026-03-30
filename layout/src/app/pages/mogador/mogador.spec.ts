import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mogador } from './mogador';

describe('Mogador', () => {
  let component: Mogador;
  let fixture: ComponentFixture<Mogador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mogador],
    }).compileComponents();

    fixture = TestBed.createComponent(Mogador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
