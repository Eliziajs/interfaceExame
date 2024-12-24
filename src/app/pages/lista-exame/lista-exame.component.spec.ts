import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExameComponent } from './lista-exame.component';

describe('ListaExameComponent', () => {
  let component: ListaExameComponent;
  let fixture: ComponentFixture<ListaExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaExameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
