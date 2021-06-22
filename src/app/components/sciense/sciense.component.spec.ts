import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienseComponent } from './sciense.component';

describe('ScienseComponent', () => {
  let component: ScienseComponent;
  let fixture: ComponentFixture<ScienseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
