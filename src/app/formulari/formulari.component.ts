import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulari',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulari.component.html',
  styleUrl: './formulari.component.css'
})
export class FormulariComponent {
  dniNumeros!: string;
    calcularLletraDNI(dniNumeros: number): string {
      const lletres = 'TRWAGMYFPDXBNJZSQVHLCKE';
      const resta = dniNumeros % 23;
      return lletres.charAt(resta);
  }

  mostrarLletraDni() {
    if (this.dniNumeros.length === 8 && !isNaN(Number(this.dniNumeros))) {
      return  this.calcularLletraDNI(parseInt(this.dniNumeros, 10));
    } else {
      return '';
    }
  }
}
