import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioLayout } from './sitio-layout';

describe('SitioLayout', () => {
  let component: SitioLayout;
  let fixture: ComponentFixture<SitioLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitioLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitioLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
