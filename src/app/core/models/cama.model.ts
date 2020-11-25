export interface Cama{



    _id:string;
    createdAt:Date,
    numeroDeCama?: Number,
    nombrePaciente?:string;
    rutPaciente?:string;
    nombreMedicoEncargado?:string;
    rutMedicoEncargado?:string;
    nombreEnfermeraEncargada?:string;
    rutEnfermeraEncargada?: string;
    camaLibre: string;


}