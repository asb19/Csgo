import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGlobalComponent } from './footer-global.component';

describe('FooterGlobalComponent', () => {
  let component: FooterGlobalComponent;
  let fixture: ComponentFixture<FooterGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
