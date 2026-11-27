import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SitioFormPage } from './sitio-form.page';

describe('SitioFormPage', () => {
  let component: SitioFormPage;
  let fixture: ComponentFixture<SitioFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
