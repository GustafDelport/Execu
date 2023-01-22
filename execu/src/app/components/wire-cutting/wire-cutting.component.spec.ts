import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireCuttingComponent } from './wire-cutting.component';

describe('WireCuttingComponent', () => {
  let component: WireCuttingComponent;
  let fixture: ComponentFixture<WireCuttingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WireCuttingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WireCuttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
