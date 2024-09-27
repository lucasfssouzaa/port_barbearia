import { Component } from '@angular/core';
import { Unid } from '../model/unid';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-unidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent {
  public unids: Unid[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.unids = [
      {
        codigo: 1,
        maps: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.405248590601!2d-46.588974089447696!3d-23.625653878667105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c988b5a5c7b%3A0xe59337e02d32a998!2sAv.%20Patente%2C%20371%20-%20Jardim%20Patente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004243-000!5e0!3m2!1spt-BR!2sbr!4v1727197193048!5m2!1spt-BR!2sbr"),
        nome: "Barbearia São Paulo",
        rua: "Av. Patente, 371",
        bairro: "Jd. Patente, São Paulo - SP, 04243-000",
        horario: "Ter à Sab - 9h às 18h"
      },
      {
        codigo: 2,
        maps: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4345.448695622335!2d-46.515941683424764!3d-23.673374779818815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce69dedb5061a1%3A0xec802f63a8b4f94f!2sAv.%20Dom%20Pedro%20I%2C%201012%20-%20Vila%20Am%C3%A9rica%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009110-000!5e0!3m2!1spt-BR!2sbr!4v1727198149754!5m2!1spt-BR!2sbr"),
        nome: "Barbearia Santo André",
        rua: "Av. Dom Pedro 1, 1012",
        bairro: "Silveira, Santo André - SP, 09110-000",
        horario: "Ter à Sab - 9h às 18h"
      },
      {
        codigo: 3,
        maps: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.6574760641342!2d-46.56839195649061!3d-23.61661412416818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ce7cb78febd%3A0xebbeb1d2c0c00eac!2sAv.%20Goi%C3%A1s%2C%201320%20-%20Santo%20Ant%C3%B4nio%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009521-300!5e0!3m2!1spt-BR!2sbr!4v1727198244305!5m2!1spt-BR!2sbr"),
        nome: "Barbearia São Caetano",
        rua: "Av. Goiás, 1320",
        bairro: "Santo Antonio, São Caetano do Sul - SP, 09521-300",
        horario: "Ter à Sab - 9h às 18h"
      } 
    ];
  }
}
