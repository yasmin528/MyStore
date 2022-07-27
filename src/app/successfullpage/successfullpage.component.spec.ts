import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullpageComponent } from './successfullpage.component';

describe('SuccessfullpageComponent', () => {
  let component: SuccessfullpageComponent;
  let fixture: ComponentFixture<SuccessfullpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfullpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
