


  export interface Paciente{






    _id: number;
    createdAt: Date;
    //definition?: string,
    nombres: string;
    apellidos:string;
    rut: string;
    edad?: number;
    diaNacimiento?: number;
    mesNacimiento?: number;
    anioNacimiento?: number;
    sexo?: string;
    habitacion?: string;
    numeroDeCama: number;
    camaEstado: string;
    //numeroDePiso?: number;
    medicoEncargado?: string;
    enfermeraEncargada?:string;
    ultimoChequeo?: string;
    chequeadoPor?: string;
    presionArterial?: number; //
    ritmoCardiaco?: number;  // x minuto
    nivelInsulina?: number;  // 
    
    nacionalidad?: string;
    provincia?: string;
    direccion?: string;
    tipoAtencionMedica?: string;
    causa?: string;
    fechaIngreso?: string;
    horaIngreso?: string;
    fechaSalida?: string;
    horaSalida?: string;

}
  
