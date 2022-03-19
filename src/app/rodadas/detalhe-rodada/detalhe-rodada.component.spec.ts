import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRodadaComponent } from './detalhe-rodada.component';

describe('DetalheRodadaComponent', () => {
  let component: DetalheRodadaComponent;
  let fixture: ComponentFixture<DetalheRodadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheRodadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheRodadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
