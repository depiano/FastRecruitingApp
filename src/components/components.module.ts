import { NgModule } from '@angular/core';
import { OffertaComponent } from './offerta/offerta';
import { CandidatoComponent } from './candidato/candidato';
import { DettaglioffertaComponent } from './dettagliofferta/dettagliofferta';
import { DettagliocandidatoComponent } from './dettagliocandidato/dettagliocandidato';
import { InviocandidaturaComponent } from './inviocandidatura/inviocandidatura';
import {CandidaturaidoneaComponent} from './candidaturaidonea/candidaturaidonea';
import { ColloquioComponent } from './colloquio/colloquio';
import { CandidaturanonidoneaComponent } from './candidaturanonidonea/candidaturanonidonea';
import { CandidaturadaverificareComponent } from './candidaturadaverificare/candidaturadaverificare';
import { CandidaturadaanalizzareComponent } from './candidaturadaanalizzare/candidaturadaanalizzare';
@NgModule({
	declarations: [OffertaComponent,
    CandidatoComponent,
    DettaglioffertaComponent,
    DettagliocandidatoComponent,
    InviocandidaturaComponent,
    CandidaturaidoneaComponent,
    ColloquioComponent,
    CandidaturanonidoneaComponent,
    CandidaturadaverificareComponent,
    CandidaturadaanalizzareComponent],
	imports: [],
	exports: [OffertaComponent,
    CandidatoComponent,
    DettaglioffertaComponent,
    DettagliocandidatoComponent,
    InviocandidaturaComponent,
    CandidaturaidoneaComponent,
    ColloquioComponent,
    CandidaturanonidoneaComponent,
    CandidaturadaverificareComponent,
    CandidaturadaanalizzareComponent]
})
export class ComponentsModule {}
