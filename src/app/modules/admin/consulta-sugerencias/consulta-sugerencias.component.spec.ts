import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSugerenciasComponent } from './consulta-sugerencias.component';

describe('ConsultaSugerenciasComponent', () => {
  let component: ConsultaSugerenciasComponent;
  let fixture: ComponentFixture<ConsultaSugerenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSugerenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
