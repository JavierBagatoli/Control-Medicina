import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableOfDaysComponent } from "./components/table-of-days/table-of-days.component";
import { medicationI, weekOfMedicine } from './models/medicine.interface';
import { MedicineFormComponent } from "./template/form-medicine/form-medicine.component";
import { Store } from '@ngrx/store';
import { MedicineStore } from './redux/store/medicine.store';
import { medicineActions } from './redux/actions/medicine.action';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    CommonModule,
    TableOfDaysComponent,
    MedicineFormComponent,
    DividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  private readonly store = inject(Store<{medicine: MedicineStore}>)

  idDaySelected: number = -1;
  idMedicineSelected: number = -1;
  listMedications: medicationI[] = [];

  week : weekOfMedicine[] = [
    {id: 0, name: 'Lunes', medication:[]},
    {id: 1, name: 'Martes', medication:[]},
    {id: 2, name: 'Miercoles', medication:[]},
    {id: 3, name: 'Jueves', medication:[]},
    {id: 4, name: 'Viernes', medication:[]},
    {id: 5, name: 'Sabado', medication:[]},
    {id: 6, name: 'Domingo', medication:[]},
  ]

  constructor(@Inject(DOCUMENT) document: Document) { }

  addMedication($event : any){
    this.listMedications.push({...$event, id: (new Date()).getTime()})
  }

  clickOnDay($event: any){
    const medication = this.listMedications.find(medication => medication.id === this.idMedicineSelected)
    if(medication){
      this.week[$event].medication.push(medication)
    }
  }

  openDialogMedicine(){
    this.store.dispatch(
      medicineActions.openDialogCreateMedicine()
    )
  }
}