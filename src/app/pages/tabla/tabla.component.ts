import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['marca', 'talla', 'articulo', 'cantidad'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  marca: string;
  talla: string;
  articulo: string;
  cantidad: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {marca: 'Nike', talla: 'M', articulo: 'Camiseta', cantidad: 10},
  {marca: 'Adidas', talla: '41', articulo: 'Tenis', cantidad: 29}, 
  {marca: 'Puma', talla: 'XS', articulo: 'Camiseta', cantidad: 22},
  {marca: 'Reebok', talla: '38', articulo: 'Tenis', cantidad: 12},
  {marca: 'Under Armour', talla: '38', articulo: 'Tenis', cantidad: 32},
  {marca: 'Asics ', talla: '30', articulo: 'Camiseta', cantidad: 42},
  {marca: 'DC', talla: 'L', articulo: 'Camiseta', cantidad: 2},
  {marca: 'Fila', talla: 'XXL', articulo: 'Camiseta', cantidad: 52},
  {marca: 'Kappa', talla: 'S', articulo: 'Camiseta', cantidad: 32},
  {marca: 'Le Coq Sportif', talla: '38', articulo: 'Tenis', cantidad: 8}
]; 
