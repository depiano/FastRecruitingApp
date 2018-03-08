export class Offerta {
   titolo: string;
   luogodilavoro:string;
   skill:string;
   annuncio:string;
   titolodistudio:string;
   key:string;


    constructor(titolo, luogodilavoro, skill, annuncio, titolodistudio, key){
        this.titolo = titolo;
        this.luogodilavoro = luogodilavoro;
        this.annuncio = annuncio;
        this.skill = skill;
        this.titolodistudio = titolodistudio;
        this.key = key;
    }


}

