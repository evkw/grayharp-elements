import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayharpElementsComponent } from './grayharp-elements.component';

describe('GrayharpElementsComponent', () => {
  let component: GrayharpElementsComponent;
  let fixture: ComponentFixture<GrayharpElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayharpElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayharpElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
