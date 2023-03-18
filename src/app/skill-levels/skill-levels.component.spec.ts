import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelsComponent } from './skill-levels.component';

describe('SkillLevelsComponent', () => {
  let component: SkillLevelsComponent;
  let fixture: ComponentFixture<SkillLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillLevelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
