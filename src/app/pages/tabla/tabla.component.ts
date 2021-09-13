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
  {marca: 'Reebok', talla: '38', articulo: 'Tenis', cantidad: 12}   
]; 