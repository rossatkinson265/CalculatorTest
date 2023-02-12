import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorBackgroundComponent } from './calculator-background.component';

describe('CalculatorSettingsComponent', () => {
  let component: CalculatorBackgroundComponent;
  let fixture: ComponentFixture<CalculatorBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
