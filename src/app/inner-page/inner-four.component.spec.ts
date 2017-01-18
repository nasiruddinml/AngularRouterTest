/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerFourComponent } from './inner-four.component';

describe('InnerFourComponent', () => {
  let component: InnerFourComponent;
  let fixture: ComponentFixture<InnerFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
