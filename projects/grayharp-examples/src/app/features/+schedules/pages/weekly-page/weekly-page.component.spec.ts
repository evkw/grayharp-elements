import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPageComponent } from './weekly-page.component';

describe('WeeklyPageComponent', () => {
  let component: WeeklyPageComponent;
  let fixture: ComponentFixture<WeeklyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
