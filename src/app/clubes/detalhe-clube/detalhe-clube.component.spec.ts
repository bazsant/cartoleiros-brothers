import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheClubeComponent } from './detalhe-clube.component';

describe('DetalheClubeComponent', () => {
  let component: DetalheClubeComponent;
  let fixture: ComponentFixture<DetalheClubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheClubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
