import { Component } from '@angular/core';

@Component({
  selector: 'app-formulari',
  standalone: true,
  imports: [],
  templateUrl: './formulari.component.html',
  styleUrl: './formulari.component.css'
})
export class FormulariComponent {

    calcularLletraDNI(dniNumeros: number): string {
      const lletres = 'TRWAGMYFPDXBNJZSQVHLCKE';
      const resta = dniNumeros % 23;
      return lletres.charAt(resta);
  }
}
