import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sceglici } from './sceglici';

describe('Sceglici', () => {
  let component: Sceglici;
  let fixture: ComponentFixture<Sceglici>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sceglici]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sceglici);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
