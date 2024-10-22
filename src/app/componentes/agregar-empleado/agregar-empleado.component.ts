import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../../servicios/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {

  formularioEmpleados: FormGroup;

  constructor( public formulario:FormBuilder, private crudService:CrudService, private ruteador:Router){

    this.formularioEmpleados = this.formulario.group(
      {
        nombre:[''],
        correo:['']
      }
    )

  }


  enviarDatos(): any {
    //console.log("Hola ME presionaste");
    console.log(this.formularioEmpleados.value);
    this.crudService.AgregarEmpleado(this.formularioEmpleados.value).subscribe();

    this.ruteador.navigateByUrl('/listar-empleado')
  }
  
}
