import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableOfDaysComponent } from "./components/table-of-days/table-of-days.component";
import { medicationI, weekOfMedicine } from './models/medicine.interface';
import { MedicineFormComponent } from "./template/form-medicine/form-medicine.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    CommonModule,
    TableOfDaysComponent,
    MedicineFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'excersice-app';

  medication = () => {
    return {
    name: 'Paracetamol',
    state: false,
    description: 'Sirve para calmar el dolor',
    dose: '200Ml',
    halfAdministration: 'Oral',
    icon: 'pills'
    }
  }

  medication1: medicationI = {
    name: 'Paracetamol',
    state: false,
    description: 'Sirve para calmar el dolor',
    dose: '200Ml',
    halfAdministration: 'Oral',
    icon: 'pills'
  }
  idDaySelected: number = -1;

  listMedications: medicationI[] = [];

  week : weekOfMedicine[] = [
    {id: 0, name: 'Lunes', medication:[this.medication()]},
    {id: 1, name: 'Martes', medication:[]},
    {id: 2, name: 'Miercoles', medication:[this.medication(),this.medication1,this.medication()]},
    {id: 3, name: 'Jueves', medication:[]},
    {id: 4, name: 'Viernes', medication:[this.medication(),this.medication()]},
    {id: 5, name: 'Sabado', medication:[]},
    {id: 6, name: 'Domingo', medication:[]},
  ]

  constructor(@Inject(DOCUMENT) document: Document) { }

  addMedication($event : any){
    this.listMedications.push($event)
  }
}