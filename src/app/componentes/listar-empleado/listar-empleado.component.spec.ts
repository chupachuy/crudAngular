import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpleadoComponent } from './listar-empleado.component';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';

describe('ListarEmpleadoComponent', () => {
  let component: ListarEmpleadoComponent;
  let fixture: ComponentFixture<ListarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEmpleadoComponent, RouterModule, RouterLink, RouterOutlet]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
