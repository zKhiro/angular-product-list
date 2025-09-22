import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralDialogComponent } from './lateral-dialog.component';

describe('LateralDialogComponent', () => {
  let component: LateralDialogComponent;
  let fixture: ComponentFixture<LateralDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LateralDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
