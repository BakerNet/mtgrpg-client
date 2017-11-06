import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmNotesComponent } from './gm-notes.component';

describe('GmNotesComponent', () => {
  let component: GmNotesComponent;
  let fixture: ComponentFixture<GmNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
