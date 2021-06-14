import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  formularioIncorrecto = false;
  @Output() newDate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  addDate() {
    if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

    //Objeto para enviar al otro componente
    const date = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    this.newDate.emit(date)
    console.log(date);
    this.reset();
  }
  reset() {
    this.nombre = '',
      this.fecha = '',
      this.hora = '',
      this.sintomas = '';
  }

}
