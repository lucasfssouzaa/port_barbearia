import { Component } from '@angular/core';
import { Serv } from '../model/serv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  public servs: Serv[] = [
    { codigo: 1, nome: "Cabelo", preco: 50},
    { codigo: 2, nome: "Barba", preco: 50},
    { codigo: 3, nome: "Sobrancelha", preco: 10},
    { codigo: 4, nome: "Cabelo + Barba", preco: 90},
    { codigo: 5, nome: "Corte Infantil (até 10 anos)", preco: 60},
  ]
}
