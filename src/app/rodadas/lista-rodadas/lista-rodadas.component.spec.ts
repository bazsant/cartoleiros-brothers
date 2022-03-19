import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRodadasComponent } from './lista-rodadas.component';

describe('ListaRodadasComponent', () => {
  let component: ListaRodadasComponent;
  let fixture: ComponentFixture<ListaRodadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRodadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRodadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
