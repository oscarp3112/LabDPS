import { Component } from '@angular/core';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
  alumnoArray: Alumno[] = [
    { id: 1, name: "Alex", lastname: "Campos", age: 35, direccion: 'Su casa', telefono: '1234567', correoElectronico: 'correo1@correo.com'},
    { id: 2, name: "Maria", lastname: "Lopez", age: 20, direccion: 'Su casa 2', telefono: '1234568', correoElectronico: 'correo2@correo.com'},
    { id: 3, name: "Juan", lastname: "Castro", age: 25, direccion: 'Su casa 3', telefono: '1234659', correoElectronico: 'correo3@correo.com'}
  ]

  selectedAlumno: Alumno = { id: 0, name: '', lastname: '', age: 0, direccion: '', telefono: '', correoElectronico: ''};

  openForEdit(alumno: Alumno): void {
    this.selectedAlumno = alumno;
  }

  addOrEdit(): void {
    if (this.selectedAlumno.id === 0) // INSERT
    {
      this.selectedAlumno.id = this.alumnoArray.length + 1;
      this.alumnoArray.push(this.selectedAlumno);
    }
    this.selectedAlumno = { id: 0, name: '', lastname: '', age: 0, direccion: '', telefono: '', correoElectronico: ''};
  }

  delete(): void {
    if (confirm('¿Esta seguro de elimiar el Registro?')) {
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = { id: 0, name: '', lastname: '', age: 0, direccion: '', telefono: '', correoElectronico: ''};
    }
  }
}
