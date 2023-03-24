import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroItemsComponent } from './registro-items.component';

describe('RegistroItemsComponent', () => {
  let component: RegistroItemsComponent;
  let fixture: ComponentFixture<RegistroItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
