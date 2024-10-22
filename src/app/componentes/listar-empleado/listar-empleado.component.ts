import { Component } from '@angular/core';
import { CrudService } from '../../servicios/crud.service';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-listar-empleado',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet, NgFor],
  templateUrl: './listar-empleado.component.html',
  styleUrl: './listar-empleado.component.css'
})
export class ListarEmpleadoComponent {

  Empleados:any;

  constructor(private crudService:CrudService){}

  ngOnInit(): void {
    this.crudService.ObtenerEmpleados().subscribe(respuesta => {
      console.log(respuesta);
      this.Empleados = respuesta;
    })
  }

  borrarRegistros(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
      this.crudService.borrarEmpleado(id).subscribe((respuesta) =>{
        this.Empleados.splice(iControl, 1);
      });
    }
    
  }


}
