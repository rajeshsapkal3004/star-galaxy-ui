import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationUiComponent } from './user-registration-ui.component';

describe('UserRegistrationUiComponent', () => {
  let component: UserRegistrationUiComponent;
  let fixture: ComponentFixture<UserRegistrationUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
