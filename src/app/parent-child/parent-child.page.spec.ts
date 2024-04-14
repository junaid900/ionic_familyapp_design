import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentChildPage } from './parent-child.page';

describe('ParentChildPage', () => {
  let component: ParentChildPage;
  let fixture: ComponentFixture<ParentChildPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
