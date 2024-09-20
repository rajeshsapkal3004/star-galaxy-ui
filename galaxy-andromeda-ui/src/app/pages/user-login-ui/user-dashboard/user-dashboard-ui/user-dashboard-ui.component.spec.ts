import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardUiComponent } from './user-dashboard-ui.component';

describe('UserDashboardUiComponent', () => {
  let component: UserDashboardUiComponent;
  let fixture: ComponentFixture<UserDashboardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
