import { Component, OnInit } from '@angular/core';
//Agregar las siguientes modulos
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
@Component({
selector: 'app-combo-box',
templateUrl: './combo-box.component.html',
styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
//crear las siguientes variables
unidades;
opcionSeleccionado: string ;
valor:number;
valorconversion:number;
constructor() {
}
ngOnInit() {
//inicializar las variables
this.unidades = ["Especial","Regular","Diesel"];
this.opcionSeleccionado="Selecciona";
this.valor=0.05;
this.valorconversion=0;
}
//funcion que realiza los calculos
capturar() {
switch(this.opcionSeleccionado){
case'Especial':
this.valorconversion=this.valor* 4.25;
this.valorconversion = Math.round(this.valorconversion * 100)/100;
break;
case'Regular':
this.valorconversion=this.valor* 4.05;
this.valorconversion = Math.round(this.valorconversion * 100)/100;
break;
case'Diesel':
this.valorconversion=this.valor * 3.96;
this.valorconversion = Math.round(this.valorconversion * 100)/100;
break;
}
}
}
export class AppComponent {
}