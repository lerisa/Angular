import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherngbComponentsComponent } from './otherngb-components.component';

describe('OtherngbComponentsComponent', () => {
  let component: OtherngbComponentsComponent;
  let fixture: ComponentFixture<OtherngbComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherngbComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherngbComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
