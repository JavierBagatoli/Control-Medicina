import { Component, inject, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { InputTextComponent } from "../../components/input-text/input-text.component";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTextareaComponent } from "../../components/input-text-box/input-text-box.component";
import { typeOfIconOfMedication } from '../../models/medicine.interface';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectIsOpenDialogCreateMedicne } from '../../redux/selectors/medicine.selectors';
import { Store } from '@ngrx/store';
import { MedicineStore } from '../../redux/store/medicine.store';
import { medicineActions } from '../../redux/actions/medicine.action';
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
        ButtonModule,
        DrawerModule
    ],
})
export class MedicineFormComponent{
    private readonly store = inject(Store<{medicine: MedicineStore}>)
    readonly isVisible = toSignal(this.store.select(selectIsOpenDialogCreateMedicne))

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
        console.log(this.formMedication.value);
        this.actionAddMedication.emit(this.formMedication.value);
        this.formMedication.reset();
        this.closeDialogMedicine();
    }

    closeDialogMedicine(){
        this.store.dispatch(
            medicineActions.closeDialogCreateMedicine()
        );
    }
}