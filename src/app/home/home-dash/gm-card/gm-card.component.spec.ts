import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmCardComponent } from './gm-card.component';

describe('GmCardComponent', () => {
  let component: GmCardComponent;
  let fixture: ComponentFixture<GmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
