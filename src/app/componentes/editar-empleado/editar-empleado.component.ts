import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../../servicios/crud.service';
import { Empleado } from '../../servicios/Empleado';

@Component({
  selector: 'app-editar-empleado',
  standalone: true,
   imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './editar-empleado.component.html',
  styleUrl: './editar-empleado.component.css'
})
export class EditarEmpleadoComponent {

  formularioEmpleados: FormGroup;

  elID:any;

  constructor(private activeRoute:ActivatedRoute, private crudService:CrudService, private formulario:FormBuilder, private ruteador:Router){
    this.elID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.crudService.obtenerEmpleado(this.elID).subscribe((respuesta:any) => {

      console.log(respuesta);

      const empleado = respuesta.find((emp: any) => emp.id === this.elID);
      
      this.formularioEmpleados.setValue({
          nombre: empleado.nombre,
          correo: empleado.correo,
        });
  
      });
    
    this.formularioEmpleados = this.formulario.group(
      {
        nombre:[''],
        correo:['']
      }
    )

  }

  enviarDatos():any {
    console.log(this.elID);
    console.log(this.formularioEmpleados.value);
    this.crudService.EditarEmpleado(this.elID, this.formularioEmpleados.value).subscribe(() => {
      return this.ruteador.navigateByUrl('/listar-empleado');
    });
  }

}
