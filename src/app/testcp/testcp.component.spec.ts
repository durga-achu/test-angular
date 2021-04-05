import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcpComponent } from './testcp.component';

describe('TestcpComponent', () => {
  let component: TestcpComponent;
  let fixture: ComponentFixture<TestcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
