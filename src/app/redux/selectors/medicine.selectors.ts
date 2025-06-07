import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MedicineStore } from "../store/medicine.store";


export const selectExersisesState = createFeatureSelector<MedicineStore>('medicine');

export const selectListSelected = createSelector(
    selectExersisesState, (state): any | null => state.listOfExcersices 
)

export const selectListSelectedToDelete = createSelector(
    selectExersisesState, (state): {day: number, poss: number} => state.listOfExcersicesToDelete
)

export const selectIsOpenDialogCreateMedicne = createSelector(
    selectExersisesState, (state): boolean => state.isOpenDialogCreateMedicine
)