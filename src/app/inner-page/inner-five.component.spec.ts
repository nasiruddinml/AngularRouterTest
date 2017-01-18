/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerFiveComponent } from './inner-five.component';

describe('InnerFiveComponent', () => {
  let component: InnerFiveComponent;
  let fixture: ComponentFixture<InnerFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
