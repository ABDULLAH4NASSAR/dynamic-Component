import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibrary1Component } from './my-library1.component';

describe('MyLibrary1Component', () => {
  let component: MyLibrary1Component;
  let fixture: ComponentFixture<MyLibrary1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibrary1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibrary1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
