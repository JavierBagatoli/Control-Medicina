import { Component, inject, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { weekOfMedicine } from '../../models/medicine.interface';
import { CardMedicineComponent } from "../card-medicine/card-medicine.component";

@Component({
    selector: 'table-of-days',
    templateUrl: './table-of-days.component.html',
    styleUrl: './table-of-days.component.scss',
    standalone: true,
    imports: [
    CommonModule,
    DividerModule,
    CardMedicineComponent
],
})
export class TableOfDaysComponent{
    weeks = input.required<weekOfMedicine[]>()
    listOfDayCellphone = input<number[]>([0,1,2,3,4,5,6])
    idDaySelected = input.required<number>()

    selectDay = output<number>();
    actionToDelete = output<{day: number, numberPoss: number}>();

    isValidClick : boolean = true;
    
    emmitClick(button: number, $event: any){
        setTimeout(() => {
            if(this.isValidClick){
                this.selectDay.emit(button);
            }
        },1)
        
    }
    
    cancelEmmitClick(){
        this.isValidClick = false;
        setTimeout(() => {
            this.isValidClick = true;
        },3)
    }

    deleteList(day: number, $event: any){
        this.weeks()[day].medication = this.weeks()[day].medication.filter((_medication, index) => index !== $event)
        localStorage.setItem('calendario', JSON.stringify(this.weeks()))
    }
}