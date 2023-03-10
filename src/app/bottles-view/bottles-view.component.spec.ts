import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlesViewComponent } from './bottles-view.component';

describe('BottlesViewComponent', () => {
  let component: BottlesViewComponent;
  let fixture: ComponentFixture<BottlesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottlesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottlesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
