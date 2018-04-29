import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedListComponent } from './led-list.component';

describe('LedListComponent', () => {
  let component: LedListComponent;
  let fixture: ComponentFixture<LedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
