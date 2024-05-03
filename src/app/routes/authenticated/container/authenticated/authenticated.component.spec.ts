import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedComponent } from './authenticated.component';

describe('AuthenticatedContainerComponent', () => {
  let component: AuthenticatedComponent;
  let fixture: ComponentFixture<AuthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
