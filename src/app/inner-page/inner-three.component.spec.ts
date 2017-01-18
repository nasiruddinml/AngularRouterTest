/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerThreeComponent } from './inner-three.component';

describe('InnerThreeComponent', () => {
  let component: InnerThreeComponent;
  let fixture: ComponentFixture<InnerThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
