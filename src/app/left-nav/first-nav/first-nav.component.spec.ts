import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNavComponent } from './first-nav.component';

describe('FirstNavComponent', () => {
  let component: FirstNavComponent;
  let fixture: ComponentFixture<FirstNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
