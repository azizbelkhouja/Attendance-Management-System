import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageManagersComponent } from './manage-managers.component';

describe('ManageManagersComponent', () => {
  let component: ManageManagersComponent;
  let fixture: ComponentFixture<ManageManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageManagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
