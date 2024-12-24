import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameformBaseComponent } from './exameform-base.component';

describe('ExameformBaseComponent', () => {
  let component: ExameformBaseComponent;
  let fixture: ComponentFixture<ExameformBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExameformBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExameformBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
