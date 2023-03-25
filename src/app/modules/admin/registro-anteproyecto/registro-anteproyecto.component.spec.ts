import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAnteproyectoComponent } from './registro-anteproyecto.component';

describe('RegistroAnteproyectoComponent', () => {
  let component: RegistroAnteproyectoComponent;
  let fixture: ComponentFixture<RegistroAnteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAnteproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
