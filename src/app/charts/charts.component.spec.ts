import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { chartComponent } from './charts.component';

describe('chartComponent', () => {
  let component: chartComponent;
  let fixture: ComponentFixture<chartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ chartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
