import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinheaderComponent } from './loggedinheader.component';

describe('LoggedinheaderComponent', () => {
  let component: LoggedinheaderComponent;
  let fixture: ComponentFixture<LoggedinheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
