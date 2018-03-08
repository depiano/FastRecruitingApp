export class Candidato {
    fullname: string;
    email:string;
    telefono:string;
    password:string;
    constructor(fullname: string,email: string, telefono: string, password: string){
        this.fullname = fullname;
        this.email = email;
        this.telefono = telefono;
        this.password = password;
    }
}