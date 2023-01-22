import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalServicesComponent } from './aditional-services.component';

describe('AditionalServicesComponent', () => {
  let component: AditionalServicesComponent;
  let fixture: ComponentFixture<AditionalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AditionalServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AditionalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
