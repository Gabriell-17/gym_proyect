import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-creacion-rutinas',
  templateUrl: './creacion-rutinas.component.html',
  styleUrls: ['./creacion-rutinas.component.css']
})

export class CreacionRutinasComponent {
  Rutinas: any[] = ['bipceps', 'Torso/Piernas', 'Push'];
  horasDC: any[] = ['0:30/Min', '1:00/h', '1:30/h'];
  Dias_S: any[] = ['Lunes-Martes-Miercoles', 'Martes-Jueves-Sabados', 'Lunes-Miercoles-Viernes']

  rtn = new FormGroup({
    rutina: new FormControl('', Validators.required),
    semana: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    dia: new FormControl('', Validators.required)
  });
  
  constructor(private formb: FormBuilder){}

  displayedColumns: string[] = ['Rutina', 'Semanas', 'Dias', 'Horas'];
  dataSource: any[]=[{Rutina: 'Torso/Piernas', Semana: '4', Dia: 'Lunes-Martes-Miercoles', Hora: '0:30/Min'}];
  
  Agregar_rutina(){
    if (this.rtn.valid) {
      const nuevaRutina = {
        Rutina: this.rtn.value.rutina,
        Semana: this.rtn.value.semana,
        Dia: this.rtn.value.dia,
        Hora: this.rtn.value.hora
      };
      console.log(nuevaRutina);

      // Agregar la nueva rutina al array dataSource
      this.dataSource.push(nuevaRutina);
      this.dataSource = [...this.dataSource];

      // Limpiar el formulario después de agregar la rutina
      this.rtn.reset();
    }
  }
}
