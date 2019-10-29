import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLIComponent } from './cli.component';

describe('CLIComponent', () => {
  let component: CLIComponent;
  let fixture: ComponentFixture<CLIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
