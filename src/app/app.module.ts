import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SkillLevelsComponent } from './skill-levels/skill-levels.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillLevelsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
