import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExameComponent } from './edit-exame.component';

describe('EditExameComponent', () => {
  let component: EditExameComponent;
  let fixture: ComponentFixture<EditExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditExameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
