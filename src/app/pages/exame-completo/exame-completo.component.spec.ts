import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameCompletoComponent } from './exame-completo.component';

describe('ExameCompletoComponent', () => {
  let component: ExameCompletoComponent;
  let fixture: ComponentFixture<ExameCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExameCompletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExameCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
