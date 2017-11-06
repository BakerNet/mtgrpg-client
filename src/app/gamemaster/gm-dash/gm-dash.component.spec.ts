import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmDashComponent } from './gm-dash.component';

describe('GmDashComponent', () => {
  let component: GmDashComponent;
  let fixture: ComponentFixture<GmDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
