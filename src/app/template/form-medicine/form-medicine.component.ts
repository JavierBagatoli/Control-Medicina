import { Component, inject, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { InputTextComponent } from "../../components/input-text/input-text.component";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTextareaComponent } from "../../components/input-text-box/input-text-box.component";
import { typeOfIconOfMedication } from '../../models/medicine.interface';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'form-medicine',
    templateUrl: './form-medicine.component.html',
    styleUrl: './form-medicine.component.scss',
    standalone: true,
    imports: [
    CommonModule,
    DividerModule,
    InputTextComponent,
    InputTextareaComponent,
    ButtonModule
],
})
export class MedicineFormComponent{
    formMedication : FormGroup = new FormGroup({});
    actionAddMedication = output()

    constructor(private _fb:FormBuilder ){
        this.formMedication =  this._fb.group({
            name: this._fb.control<string | null>(null, [Validators.required, Validators.min(5)]),
            description: this._fb.control<string | null>(null, [Validators.required, Validators.min(5)]),
            dose: this._fb.control<string | null>(null, [Validators.required, Validators.min(5)]),
            halfAdministration: this._fb.control<string | null>(null, [Validators.required, Validators.min(5)]),
            icon: this._fb.control<typeOfIconOfMedication | null>(null, [Validators.required]),
            state: this._fb.control<false>(false, [Validators.required]),
        })
    }

    get nameMedication () {
        return this.formMedication.controls['name'] as FormControl
    }

    get descriptionMedication () {
        return this.formMedication.controls['description'] as FormControl
    }

    get doseMedication () {
        return this.formMedication.controls['dose'] as FormControl
    }

    get halfAdministrationMedication () {
        return this.formMedication.controls['halfAdministration'] as FormControl
    }

    get iconMedication () {
        return this.formMedication.controls['icon'] as FormControl
    }

    addMedication(){
        console.log(this.formMedication.value)
        this.actionAddMedication.emit(this.formMedication.value);
        this.formMedication.reset();
    }
}