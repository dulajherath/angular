import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesngComponent } from './heroesng.component';

describe('HeroesngComponent', () => {
  let component: HeroesngComponent;
  let fixture: ComponentFixture<HeroesngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
