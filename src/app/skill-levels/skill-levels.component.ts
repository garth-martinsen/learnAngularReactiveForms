import { Component, Output, EventEmitter  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-skill-levels',
  templateUrl: './skill-levels.component.html',
  styleUrls: ['./skill-levels.component.css']
})

export class SkillLevelsComponent {
  SKILL_NAMES : string[] ='SC,ASC,TO,TSG,ESC,EAVP,EAVR,EBD,EVT,BC,IC,BW,ENI,ESO,EVBP,EVBR,ESL,IWW,IWA,IWC,RDB,RDM,ADR,AOF,LW'.split(',');

  skillsForm= new FormGroup({
    SC: new FormControl(''),
    ASC: new FormControl(''),
    TO: new FormControl(''),
    TSG: new FormControl(''),
    ESC: new FormControl(''),
    EAVP: new FormControl(''),
    EAVR: new FormControl(''),
    EBD: new FormControl(''),
    EVT: new FormControl(''),
    BC: new FormControl(''),
    IC: new FormControl(''),
    BW: new FormControl(''),
    ENI: new FormControl(''),
    ESO: new FormControl(''),
    EVBP: new FormControl(''),
    EVBR: new FormControl(''),
    ESL: new FormControl(''),
    IWW: new FormControl(''),
    IWA: new FormControl(''),
    IWC: new FormControl(''),
    RDB: new FormControl(''),
    RDM: new FormControl(''),
    ADR: new FormControl(''),
    AOF: new FormControl(''),
    LW: new FormControl('')
  });

  @Output() skillsEvent = new EventEmitter<FormGroup>();


  onSubmit(){
	console.warn(this.skillsForm.value);
 }

}
