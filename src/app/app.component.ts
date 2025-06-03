import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'excersice-app';

  medication: medicationI = {
    name: 'Paracetamol',
    state: false,
    description: 'Sirve para calmar el dolor',
    dose: '200Ml',
    halfAdministration: 'Oral',
    icon: 'pills'
  }

  week : {id: number, name: string, medication: medicationI[]}[] = [
    {id: 0, name: 'Lunes', medication:[this.medication]},
    {id: 1, name: 'Martes', medication:[]},
    {id: 2, name: 'Miercoles', medication:[this.medication,this.medication,this.medication]},
    {id: 3, name: 'Jueves', medication:[]},
    {id: 4, name: 'Viernes', medication:[this.medication,this.medication]},
    {id: 5, name: 'Sabado', medication:[]},
    {id: 6, name: 'Domingo', medication:[]},
  ]

  constructor(@Inject(DOCUMENT) document: Document) { }
}

export interface medicationI{
    name: string,
    state: boolean,
    description: string,
    dose: string,
    halfAdministration: string,
    icon: string,
  }