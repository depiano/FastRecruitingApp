export class Candidatura {
    fullnameCandidato:string;
    cv: string;
    data_colloquio:string;
    google_maps:string;
    id_candidato:string;
    id_offerta:string;
    id_tecnico;
    lett_presentazione:string;
    luogo_colloquio:string;
    note:string;
    note_recruiter:string;
    note_tecnico:string;
    orario_colloquio:string;
    skill:string;
    titoloOfferta:string;
    titolodistudio:string;
    data:string;
    giudizio: string;
    chiave:string;



    constructor(fullnameCandidato:string, cv: string, data_colloquio:string, google_maps:string,
    id_candidato:string,id_offerta:string,id_tecnico, lett_presentazione:string,  luogo_colloquio:string,
    note:string,note_recruiter:string,note_tecnico:string, orario_colloquio:string,skill:string,
    titoloOfferta:string,  titolodistudio:string, data:string, giudizio: string, chiave:string){
        this.fullnameCandidato=fullnameCandidato;
        this.cv=cv;
        this.data_colloquio=data_colloquio;
        this.google_maps=google_maps;
        this.id_candidato=id_candidato;
        this.id_offerta=id_offerta;
        this.id_tecnico=id_tecnico;
        this.lett_presentazione=lett_presentazione;
        this.luogo_colloquio=luogo_colloquio;
        this.note=note;
        this.note_recruiter=note_recruiter;
        this.note_tecnico=note_tecnico;
        this.orario_colloquio=orario_colloquio;
        this.skill=skill;
        this.titoloOfferta=titoloOfferta;
        this.titolodistudio=titolodistudio;
        this.data=data;
        this.giudizio=giudizio;
        this.chiave=chiave;
    }
}