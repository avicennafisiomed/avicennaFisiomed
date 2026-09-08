import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tecnologie } from './tecnologie';

describe('Tecnologie', () => {
  let component: Tecnologie;
  let fixture: ComponentFixture<Tecnologie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tecnologie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tecnologie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
