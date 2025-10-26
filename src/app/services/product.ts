import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  constructor() { }

  getProducts() {
  return [
    {
      id:1,
      name:'Playstation 5',
      description: ' Um console de ultima geração para jogos',
      price:3500,
      launchDate: new Date('2025-10-15'),
      available: true,
      onSale: true,
      discount:0.15
    },
    {
      id:2,
      name:'Notebook Gamer',
      description:'leve e poderoso para suas tarefas',
      price: 5200,
      launchDate: new Date ('2025-10-18'),
      available:false,
      onSale: false,
      discount: 0
    },
    {
      id:3,
      name: 'Fone de Ouvido Bluetooth',
      description:'Som de alta Qualidade',
      price:450,
      launchDate: new Date('2025-10-06'),
      available: true,
      onSale: true,
      discount:0.10
     }
   ];
 }
}
