import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNavComponent } from './welcome-nav.component';

describe('WelcomeNavComponent', () => {
  let component: WelcomeNavComponent;
  let fixture: ComponentFixture<WelcomeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
