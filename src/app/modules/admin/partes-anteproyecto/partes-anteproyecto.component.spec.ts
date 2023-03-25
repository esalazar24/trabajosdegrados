import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesAnteproyectoComponent } from './partes-anteproyecto.component';

describe('PartesAnteproyectoComponent', () => {
  let component: PartesAnteproyectoComponent;
  let fixture: ComponentFixture<PartesAnteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartesAnteproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartesAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
