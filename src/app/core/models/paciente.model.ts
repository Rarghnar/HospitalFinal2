

export interface Paciente{    
  _id: string; 
  createdAt: Date;
  nombres: string;
  apellidos: string;
  rut: string;
  diaNacimiento: number;
  mesNacimiento: string;
  anioNacimiento: number;
  sexo: string;
  edad: number;
  nacionalidad:string;
  provincia:string;
  direccion: string;
  telefono:string;
  nombresRepresentante: string;
  apellidosRepresentante:string;
  rutRepresentante:string;
  telefonoRepresentante:string;
  
  nombresDoctor:string;
  apellidosDoctor:string  ;
  rutDoctor:string ;
  tipoAtencionMedica:string;
  motivo:string;
  fechaIngreso:string;
  horaIngreso:string;
  fechaSalida:string;
  horaSalida:string;
  
  cama:string;
  habitacion:string;
  
  
  
  ultimoChequeo:string;
  chequeadoPor:string;
  presionArterial:string;
  ritmoCardiaco:string;
  nivelInsulina: string;
  enfermeraEncargada: string;
  enfermeraApellidos: string;

  camaLibre: string;

}
  
