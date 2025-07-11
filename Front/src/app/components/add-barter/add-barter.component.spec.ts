import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBarterComponent } from './add-barter.component';

describe('AddBarterComponent', () => {
  let component: AddBarterComponent;
  let fixture: ComponentFixture<AddBarterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBarterComponent]
    });
    fixture = TestBed.createComponent(AddBarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
