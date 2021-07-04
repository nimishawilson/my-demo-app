import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFacadeComponent } from './learn-facade.component';

describe('LearnFacadeComponent', () => {
  let component: LearnFacadeComponent;
  let fixture: ComponentFixture<LearnFacadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnFacadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
