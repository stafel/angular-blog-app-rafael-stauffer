import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityActionsComponent } from './identity-actions.component';

describe('IdentityActionsComponent', () => {
  let component: IdentityActionsComponent;
  let fixture: ComponentFixture<IdentityActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityActionsComponent],
    });
    fixture = TestBed.createComponent(IdentityActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
