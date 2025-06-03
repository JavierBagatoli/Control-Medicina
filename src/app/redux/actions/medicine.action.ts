import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const medicineActions = createActionGroup ({
    source: 'medicine',
    events: {
        'Restart':emptyProps(),

        'Set List of Medicine': props<{list: any | null}>(),
        'Delete List of Medicine of Day': props<{day: number, poss:number}>()
    }
})