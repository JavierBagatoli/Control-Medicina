import { createReducer, on } from '@ngrx/store';
import { medicineActions } from '../actions/medicine.action';
import { MedicineStore } from '../store/medicine.store';

export const initialState: MedicineStore = {
    listOfExcersices: null,
    listOfExcersicesToDelete: {
        day: -1,
        poss: -1,
    },
    isOpenDialogCreateMedicine: false,
};

export const medicineReducer = createReducer(
  initialState,
  
  on(medicineActions.restart, () => {
    return initialState
  }),

  on(medicineActions.setListOfMedicine, (state, {list}):MedicineStore => {
    return {
        ...state,
        listOfExcersices: list
    }
  }),
  on(medicineActions.deleteListOfMedicineOfDay, (state, {day,poss}):MedicineStore => {
    return {
        ...state,
        listOfExcersicesToDelete: {
          day: day,
          poss: poss,
        }
    }
  }),

  on(medicineActions.openDialogCreateMedicine, (state):MedicineStore => {
    return {
        ...state,
        isOpenDialogCreateMedicine: true
    }
  }),

  on(medicineActions.closeDialogCreateMedicine, (state):MedicineStore => {
    return {
        ...state,
        isOpenDialogCreateMedicine: false
    }
  }),
)