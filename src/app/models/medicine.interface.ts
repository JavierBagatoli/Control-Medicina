export interface weekOfMedicine {
    id: number,
    name: string,
    medication: medicationI[]
}

export interface medicationI{
    id: number,
    name: string,
    state: boolean,
    description: string,
    dose: string,
    halfAdministration: string,
    icon: string,
}

export type typeOfIconOfMedication = 'vitamins' | 'vaccination' | 'pills-bottle' | 'pill' | 'pharmaceutical' | 'multivitamin' | 'medicine' | 'drugs'
