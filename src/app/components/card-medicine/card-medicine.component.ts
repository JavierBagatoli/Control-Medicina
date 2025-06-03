import { Component, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { medicationI } from '../../models/medicine.interface';

@Component({
    selector: 'card-medicine',
    templateUrl: './card-medicine.component.html',
    styleUrl: './card-medicine.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        DividerModule,
    ],
})
export class CardMedicineComponent{
    medicine = input.required<medicationI>()
    showMoreInfo: boolean = false;
    
}