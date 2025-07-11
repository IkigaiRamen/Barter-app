import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarterRequestComponent } from './barter-request.component';

describe('BarterRequestComponent', () => {
  let component: BarterRequestComponent;
  let fixture: ComponentFixture<BarterRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarterRequestComponent]
    });
    fixture = TestBed.createComponent(BarterRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
