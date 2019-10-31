import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancercodesComponent } from './cancercodes.component';

describe('CancercodesComponent', () => {
  let component: CancercodesComponent;
  let fixture: ComponentFixture<CancercodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancercodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancercodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
